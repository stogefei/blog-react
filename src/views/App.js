import React, {Component} from 'react';
import Home from './home';


class App extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="app-box">
                <Home/>
            </div>
        )
    }
}

export default App;
