import React from 'react';
import Header from '../components/header/header'
import '../css/main.css'
import '../css/reset.css'
import {Route, Switch} from 'react-router-dom';
import Menu from './menu';
import Product from './product';
import Infor from './info';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/menu" component={Menu}/>
        <Route path="/product" component={Product}/>
        <Route path="/infor" component={Infor}/>
      </Switch>
    </div>
  );
}

export default App;
