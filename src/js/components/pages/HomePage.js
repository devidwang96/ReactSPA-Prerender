// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

import react from '../../../images/react-small.png';
import reactrouter from '../../../images/react-router-small.png';
import redux from '../../../images/redux-small.png';
import bootstrap from '../../../images/bootstrap4-small.png';
import sass from '../../../images/sass-small.png';
import webpack from '../../../images/webpack-small.png';


// COMPONENT

class HomePage extends React.Component{
    constructor(){
        super();
    }

    componentDidMount() {
        document.dispatchEvent(new Event('prerender'));
        console.log('prerender');
    }

    render(){
        return (
            <main>
                <div className={"jumbotron jumbotron-fluid text-dark bg-light animated"}>
                    <h1 className="display-6 text-center">Привет из Реактной части :)</h1>
                    <p className="lead text-center">Сборка реакта включает в себя Redux(Store), Router, Thunk, Sass</p>
                    <hr className="my-4" />
                    <div className="text-center">
                        <img className="m-3" height="50" src={react} alt="React" />
                        <img className="m-3" height="50" src={reactrouter} alt="React Router" />
                        <img className="m-3" height="50" src={redux} alt="Redux" />
                        <img className="m-3" height="50" src={sass} alt="Sass" />
                        <img className="m-3" height="50" src={webpack} alt="Webpack" />
                    </div>
                </div>
            </main>
        )
    }
}

export default HomePage;