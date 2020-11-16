import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
import HomePage from './components/homePage';
import AboutPage from './components/AboutPage';

render(<AboutPage />, document.getElementById("root"));
