import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SingUp from './SingUp';
//import Form from './form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SingUp/>, document.getElementById('root'));
registerServiceWorker();
