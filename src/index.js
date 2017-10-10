import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import LyftModel from './LyftModel';

const model = new LyftModel();
const render = () => {
	ReactDOM.render(<App model = {model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();

registerServiceWorker();
