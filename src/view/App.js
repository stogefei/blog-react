import React from 'react';
import '../css/main.scss'
import '../css/reset.css'
import {Route, Switch} from 'react-router-dom';
import Menu from './menu';
import Detail from './detail';
import Infor from './info';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/menu" component={Menu}/>
        <Route path="/menu/detail" component={Detail}/>
        <Route path="/infor" component={Infor}/>
      </Switch>
    </div>
  );
}

export default App;
