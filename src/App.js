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
import Pin from "./Pin.js";
import Form from "./form.js";
import LyftMap from './LyftMap';

class App extends Component {
  render() {
    const { model } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/"
                  render={() => <Redirect to= {'/home'}/>}/>
            <Route  path="/home" render={() => <Home />}/>
            <Route  path="/signup" render={() => <SingUp  model={model}/>}/>
            <Route  path="/pin" render={() => <Pin model={model}/>}/>
            <Route  path="/signup-form" render={() => <Form model={model}/>}/>
            <Route  path="/lyftmap" render={() => <LyftMap model={model}/>}/>

            <Route render={() => <Redirect to= {'/home'}/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
