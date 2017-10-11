import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';

import registerServiceWorker from './registerServiceWorker';
import LyftModel from './js/LyftModel';

const model = new LyftModel();
const render = () => {
	ReactDOM.render(<App model = {model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();

registerServiceWorker();
