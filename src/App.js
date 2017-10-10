import React, { Component } from 'react';
//https://maps.googleapis.com/maps/api/js?key=AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4&libraries=places
//AIzaSyCl5FxNRuSN9tRMoZFJsH_q511Zt6DBVH4
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './App.css';

import Home from "./Home.js";
import SingUp from "./SingUp.js";
import Form from "./form.js";
import LyftMap from "./Map.js";

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

/**
 * <div>
        <LyftMap/>
      </div>
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/"
                  render={() => <Redirect to= {'/home'}/>}/>
            <Route  path="/home" render={() => <Home />}/>
            <Route  path="/signup" render={() => <SingUp />}/>
            <Route  path="/signup-form" render={() => <Form />}/>
            <Route  path="/lyftmap" render={() => <LyftMap />}/>
    
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
