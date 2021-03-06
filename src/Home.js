import React, {Component} from 'react';
import './App.css';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return(<div className="container-fluid bienvenida">
            <div className="container">
                <header>
                    <ul className="main-nav">
                        <li><NavLink to={"/home"} exact path="/">Home</NavLink></li>
                        <li><NavLink to={"/battle"}>Battle</NavLink></li> 
                        <li><NavLink to={"/popular"}>Popular</NavLink></li>       
                    </ul>
                </header>
                <h1> Github Battle: Battle your friends... and stuff.</h1>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <NavLink className="btn btn-default btn-lg active init" to="/battle">Battle</NavLink >
                </div>
            </div>
 </div>);
}

export default Home;