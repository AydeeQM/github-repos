import React, {Component} from 'react';
import './App.css';
import {
	NavLink
} from 'react-router-dom'


const Popular = ({model}) => {
	return(<div className="container-fluid bienvenida">
            <div className="container">
                <header>
                    <ul className="main-nav">
                        <li><NavLink to={"/home"} exact path="/">Home</NavLink></li>
                        <li><NavLink to={"/battle"}>Battle</NavLink></li> 
                        <li><NavLink to={"/popular"}>Popular</NavLink></li>       
                    </ul>
                </header>
            </div>
    </div>);
}

export default Popular;