import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WeatherComponent from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(<WeatherComponent />, document.getElementById('root'));

registerServiceWorker();
