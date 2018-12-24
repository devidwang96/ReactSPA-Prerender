// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

// import { AppRouter } from './routers/AppRouter';

import { BrowserRouter as Router } from "react-router-dom";



// // COMPONENT

import Header from "./Header";
import Container from "./Container";


class App extends React.Component {
    constructor (){
        super();
    }

    render() {
        return (
            <Provider store={createAppStore()}>
                <Router>
                    <div>
                        <Header/>
                        <Container/>
                    </div>
                </Router>
            </Provider>
        )
    }

    componentDidMount(){
        console.log('Main mounted');
    }
}

export default App;