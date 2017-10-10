import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

import logo from './img/logo-white.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="index">
                    <div className="contain">
                        <div id="logo">
                            <img className="img-responsive" src={logo} alt="" />
                        </div>
                        <div className="row" id="botones">
                            <div className="col-xs-6 col-sm-6">
                                <button className="btn-lg" id="log-in">Log in</button>
                            </div>
                            <div className="col-xs-6 col-sm-6">
                                <NavLink to={"/signup"} className="btn-lg" id="sign-up">
				                    Sign Up
			                    </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
export default Home;