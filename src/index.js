import React from 'react';
import ReactDOM from 'react-dom';
import './stats/style/main.css';
import TrueStats from './stats/trueStats.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrueStats />, document.getElementById('root'));
registerServiceWorker();