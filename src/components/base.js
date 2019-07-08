import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Base extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="base-box">
                <Row gutter={16}>
                    <Col className="gutter-row" span={16}>
                        <div className="base-inner">
                            <div className="img">
                                <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                            </div>
                            <div className="base-list">
                                <ul>
                                    <li className="list-item">
                                        <div className="item-right">
                                            <a href="" className="wrap-img">
                                                <img className="img-blur-done"
                                                     src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                                            </a>
                                        </div>
                                        <div className="item-left">
                                            <a href="/" className="title">（实例）从0到1的后台管理系统</a>
                                            <p className="abstract">
                                                依据之前的项目后台设计，整理了关于后台管理系统从无到有的基本过程，包括项目介绍、原型构思、视觉设计、后台实现、测试反馈、运营维护。（以下部分涉及...
                                            </p>
                                            <div className="meta">
                                                <a className="nickname" target="_blank" href="/u/6ff64d8ddfa9">网商教练俊增</a>
                                                 <span className="time">2019-07-08</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="base-author">
                            list
                        </div>
                    </Col>
                </Row>


            </div>
        )
    };
}
export default Base;
