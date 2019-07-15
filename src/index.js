import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './styles/index.less';
import './styles/theme.less';
// import './setupProxy'
import App from './views/App';
import Blog from './views/blog';
import BlogDetail from './views/blogDetail';
import reducers from './redux/reducer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
));

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div className='body-box'>
                <Switch>
                    {/*<App />*/}
                    <Route path='/' exact component={App} />
                    <Route path='/editorblog' component={Blog} />
                    <Route path='/blogdetail/:id' component={BlogDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
