import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ZipCodesPage from "./pages/ZipCodesPage";


class Container extends React.Component {
    
    render(){
        return (
            <div>
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 3000, exit: 3000 }}
                        classNames="fade"
                    >
                        <section className="route-section">
                            <Switch location={this.props.location}>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/about" component={AboutPage} />
                                <Route path="/zip-codes" component={ZipCodesPage} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
    
    componentDidMount(){
        console.log('Смонтирован');
    }
}


export default withRouter(Container);
