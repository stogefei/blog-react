import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './view/App';
import {BrowserRouter, Redirect} from 'react-router-dom';
// import Product from './view/product';
// import Infor from './view/info';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <BrowserRouter>
            <App/>
            {/* <Route path="/" component={App}/> */}
            <Redirect path="/" to={{pathname: '/menu'}}/>
        </BrowserRouter>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
