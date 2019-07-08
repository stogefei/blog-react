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
                           <Button>登录</Button>
                       </p>
                       <p>
                           <Button type="primary">注册</Button>
                       </p>
                       <p>
                           <Button type="primary" icon="edit" shape="round">
                               写文章
                           </Button>
                       </p>
                   </div>
                   <div className="home-center">
                       <ul className="header-tab">
                           <li>
                               <a href="#">
                                   <Icon type="home" theme="filled" />
                                   首页
                               </a>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
    )
    };
}

export default Header;
