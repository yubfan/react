import React from 'react'
import {renderToString} from 'react-dom/server';
import App from './App'

const appHtml = renderToString(<App/>);
console.log(appHtml);