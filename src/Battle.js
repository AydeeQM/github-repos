import React, {Component} from 'react';
import './App.css';
import {
	NavLink
} from 'react-router-dom'


const  SearchUser1  = ({model}) => {
	const onSubmit =  (e) => {
		e.preventDefault();
		//model.fetchSearchTopstories(model.searchTerm, 0);
	};
	const onChange = (e) => {
		model.searchTerm = e.target.value;
	}

	return (
	<div className="interactions">
		<form className="form-group" onSubmit={onSubmit}>
            <label>Player One</label>
			<input
				type="text"
				className="form-control"
				//defaultValue={model.searchTerm}
				onChange={onChange}
			/>
			<button type="submit" className="btn btn-default">Search</button>
		</form>
	</div>);
}

const  SearchUser2  = ({model}) => {
	const onSubmit =  (e) => {
		e.preventDefault();
		//model.fetchSearchTopstories(model.searchTerm, 0);
	};
	const onChange = (e) => {
		model.searchTerm = e.target.value;
	}

	return (
	<div className="interactions">
		<form className="form-group" onSubmit={onSubmit}>
            <label>Player Two</label>
			<input
				type="text"
				className="form-control"
				//defaultValue={model.searchTerm}
				onChange={onChange}
			/>
			<button type="submit" className="btn btn-default">Search</button>
		</form>
	</div>);
}


const Battle = ({model}) => {
	return(<div className="container-fluid bienvenida">
            <div className="container">
                <header>
                    <ul className="main-nav">
                        <li><NavLink to={"/home"} exact path="/">Home</NavLink></li>
                        <li><NavLink to={"/battle"}>Battle</NavLink></li> 
                        <li><NavLink to={"/popular"}>Popular</NavLink></li>       
                    </ul>
                </header>
                    <div className="container btn-login">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <SearchUser1 model = {model}/>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                            <div>
                                <SearchUser2 model = {model}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>);
}

export default Battle;
