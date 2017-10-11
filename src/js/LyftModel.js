import React from 'react';

class LyftModel {
	constructor () {
		this.notify = null;
        this.nombre='';
        this.apellido='';
        this.email='';
	}
	subscribe (render) {
		this.notify = render;
	}

}

export default LyftModel;