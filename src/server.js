import React from 'react'
import {render} from 'react-dom';
import App from './App'

const appHtml = render((<App/>),document.getElementById('app'));
console.log(appHtml);