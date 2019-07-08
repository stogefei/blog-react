import React, { Component } from 'react';
import Header from '../components/header';
import Base from '../components/base';
class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="">
                <Header/>
                <Base/>
            </div>
        )
    };
}

export default Home;
