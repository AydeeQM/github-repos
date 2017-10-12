import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './App.css';

import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';


const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route  path="/Lyft-app-react"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/battle" render={() => <Battle model={model} />}/>
				<Route  path="/popular" render={() => <Popular model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;

