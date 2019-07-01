import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../imgs/logo.png'

function Header() {
    return (
        <div className="header-menu">
            <div className="logo">
                <div className="logo-left">
                    <img src={logo} alt=''/>
                </div>
                <div className="logo-left">
                    <span className="logo-text">LOGO</span>
                </div>
            </div>
            <div className="menu-tabs header-menu-tab">
                <ul>
                    <li>
                        <NavLink to="/menu">MUNE SHOW</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">MUNE SHOW</NavLink>
                    </li>
                    <li>
                        <NavLink to="/infor">MUNE SHOW</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
