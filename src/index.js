import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WeatherComponent from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import IconWidget from "./IconWidget.js";

ReactDOM.render(<WeatherComponent />, document.getElementById('root'));
ReactDOM.render(<IconWidget />, document.getElementById('card'));

registerServiceWorker();
