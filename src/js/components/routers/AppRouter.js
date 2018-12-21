// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ZipCodesPage } from '../pages/ZipCodesPage';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const history = createHistory();

// COMPONENT

export const AppRouter = () => (
    <Router history={history}>
        <Fragment>
            <Header />
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 3000, exit: 3000 }}
                    classNames="fade"
                >
                    <section className="route-section">
                        <Switch>
                            <Route path='/' component={HomePage} exact={true} />
                            <Route path='/zipcodes' component={ZipCodesPage} />
                            <Route path='/about' component={AboutPage} />
                            <Redirect to="/" />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    </Router>
);

