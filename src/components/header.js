import React, { Component } from 'react';
import logo from '../images/blog.jpg';
import { Button, Icon } from 'antd';
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="home-header">
               <div className="home-header-box">
                   <div className="home-logo">
                       <img src={logo} className="logo"/>
                   </div>
                   <div className="home-right">
                       <p>
                           <a href="">登录</a>
                       </p>
                       <p>
                           <Button className="register-btn">注册</Button>
                       </p>
                   </div>
               </div>
            </div>
    )
    };
}

export default Header;
