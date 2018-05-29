import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SRoute from './Route/SRoute';

ReactDOM.render(<SRoute />, document.getElementById('root'));
registerServiceWorker();
