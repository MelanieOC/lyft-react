import React, { Component } from 'react';
import lyft from './img/lyft.jpg';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import './App.css';
class NextTrip extends Component {
    render() {
        return (
            <div>
                <h1>Tu Lyft está en camino</h1>
                <img className='img-responsive' src={lyft} />
                <NavLink to='/lyftmap' className='btn btn-next btn-lg'>Otro Viaje</NavLink>
            </div>
        );
    }
}

export default NextTrip;