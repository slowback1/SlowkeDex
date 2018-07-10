import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrueStats from './stats/trueStats.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrueStats />, document.getElementById('root'));
registerServiceWorker();