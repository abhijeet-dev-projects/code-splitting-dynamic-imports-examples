import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
//import About from './components/About';
// Normal scenario:  main.chunk.js 3.1 kB

import { loadAsyncComponent } from './hoc/loadAsyncComponent';
// import { About } from './components/About';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/' exact component={Home} />
            {/* <Route path='/about' exact component={About} /> */}
            <Route path='/about' render={(props) => loadAsyncComponent(import(/* webpackChunkName: "async-About" */'./components/About'), props)} />
        </App>
    </BrowserRouter>,
    document.querySelector('#root')
)