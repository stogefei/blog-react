import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Base extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="base-box">
                <Row gutter={24}>
                    <Col className="gutter-row" span={10}>
                        <div className="base-inner">
                            <div className="img">
                                <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                            </div>
                            <div className="text-inner">
                                <h1 className="text-title">How to Ask for Help at Work</h1>
                                <p className="text-detail">
                                    A script for getting things off your plate while still seeming competent
                                </p>
                               <div className="text-info">
                                   <p className="text-author">Forge</p>
                                   <p className="text-time">2018-09-00</p>
                               </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="base-author">
                            list
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
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
