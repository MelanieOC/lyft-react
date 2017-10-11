import React, { Component } from 'react';
import lyft from '/.img/lyft.jpg';

class otroViaje extends Component {
    render(){
        <div>
            <h1>Tu Lyft está en camino</h1>
            <img src={lyft}/>
            <NavLink to='/lyftmap'>Otro Viaje</NavLink>
        </div>
    }
}