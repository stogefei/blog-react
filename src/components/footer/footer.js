import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../imgs/logo.png'

function Footer() {
    const list = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id:7
        },
        {
            id: 8
        },
        {
            id: 9
        },
        {
            id: 10
        },
        {
            id: 12
        }
    ];
    return (
        <div className="footer-menu">
           <div className="footer-menu-logo">
               <div className="logo">
                   <div className="logo-left">
                       <img src={logo} alt=''/>
                   </div>
                   <div className="logo-left">
                       <span className="logo-text">LOGO</span>
                   </div>
               </div>
               <div className="menu-tabs">
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
                       <li>
                           <NavLink to="/infor">MUNE SHOW</NavLink>
                       </li>
                   </ul>
               </div>
           </div>
            <div className="footer-middle">
                <div className="footer-middle-left">
                    High-quality digital resources which make your design workflow faster and easier
                </div>
                <div className="footer-middle-right">
                    <ul>
                        {list.map((item, index) =>
                            <li key={item.id}>
                                <a href="">Link Show</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="footer-copy-right">
                Copyright &#169 2015-2019 xxxxx.com
            </div>
        </div>
    );
}

export default Footer;
