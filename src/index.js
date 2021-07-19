import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';

import { loadAsyncComponent } from './hoc/loadAsyncComponent';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/' exact component={Home} />
            <Route path='/about' render={(props) => loadAsyncComponent(import(/* webpackChunkName: "async-About" */'./components/About'), props)} />
            <Route path='/posts' render={(props) => loadAsyncComponent(import(/* webpackChunkName: "async-Posts" */'./components/Posts'), props)} />
        </App>
    </BrowserRouter>,
    document.querySelector('#root')
)