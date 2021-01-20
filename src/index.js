import React from 'react';
import ReactDOM from 'react-dom';
import { MoviesApp } from './MoviesApp';

import './index.scss';

const divRoot = document.querySelector("#root");

ReactDOM.render(<MoviesApp />, divRoot);