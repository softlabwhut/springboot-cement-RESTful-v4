import React from 'react';
import ReactDOM from 'react-dom';
import Admin_app from './adminComponent/Admin_app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin_app />, document.getElementById('root'));
registerServiceWorker();