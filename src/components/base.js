import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Base extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="base-box">
                <Row gutter={24}>
                    <Col className="gutter-row" span={9}>
                        <div className="base-inner">
                            <div className="img">
                                <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                            </div>
                            <div className="text-inner">
                                <h1 className="text-title text-color">How to Ask for Help at Work</h1>
                                <p className="text-detail text-color">
                                    A script for getting things off your plate while still seeming competent
                                </p>
                               <div className="text-info text-color">
                                   <p className="text-author">Forge</p>
                                   <p className="text-time">2018-09-00</p>
                               </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="base-author">
                          <ul>
                              <li className="base-item">
                                  <div className="base-meddle-left">
                                      <a href="/" className="left-img">
                                          <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                      </a>
                                  </div>
                                  <div className="base-meddle-right">
                                      <p className="base-right-title">What If an Algorithm Could Predict Your Unborn Child’s Intelligence?</p>
                                      <div className="text-info">
                                          <p className="text-author">Forge</p>
                                          <p className="text-time">2018-09-00</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="base-item">
                                  <div className="base-meddle-left">
                                      <a href="/" className="left-img">
                                          <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                      </a>
                                  </div>
                                  <div className="base-meddle-right">
                                      <p className="base-right-title">What If an Algorithm Could Predict Your Unborn Child’s Intelligence?</p>
                                      <div className="text-info">
                                          <p className="text-author">Forge</p>
                                          <p className="text-time">2018-09-00</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="base-item">
                                  <div className="base-meddle-left">
                                      <a href="/" className="left-img">
                                          <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                      </a>
                                  </div>
                                  <div className="base-meddle-right">
                                      <p className="base-right-title">What If an Algorithm Could Predict Your Unborn Child’s Intelligence?</p>
                                      <div className="text-info">
                                          <p className="text-author">Forge</p>
                                          <p className="text-time">2018-09-00</p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div className="base-author">
                            <a href="/" className="right-img">
                                <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                            </a>
                            <p className="base-right-title">What If an Algorithm Could Predict Your Unborn Child’s Intelligence?</p>
                            <p className="base-right-detail">
                                The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                            </p>
                            <div className="text-info">
                                <p className="text-author">Forge</p>
                                <p className="text-time">2018-09-00</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="extremeHero-divider"></div>
                {/*列表*/}
                <div className="data-list">
                    <div className="data-left">
                        <div className="data-left-title">
                            <p className="data-left-inner text-color">Featured for members</p>
                            <span>&nbsp;</span>
                        </div>
                        <ul>
                            <li className="data-item">
                                <div className="data-item-left">
                                  <div className="data-item-left-inner">
                                    <h2 className="text-title text-color">How to Ask for Help at Work</h2>
                                    <p className="data-item-detail summy-color">
                                        The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                    </p>
                                    <div className="text-info">
                                        <p className="text-author">Forge</p>
                                        <p className="text-time">2018-09-00</p>
                                    </div>
                                 </div>
                                </div>
                                <div className="data-item-right">
                                    <a href="/">
                                        <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                    </a>
                                </div>
                            </li>
                            <li className="data-item">
                                <div className="data-item-left">
                                    <div className="data-item-left-inner">
                                        <h2 className="text-title text-color">How to Ask for Help at Work</h2>
                                        <p className="data-item-detail summy-color">
                                            The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                        </p>
                                        <div className="text-info">
                                            <p className="text-author">Forge</p>
                                            <p className="text-time">2018-09-00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="data-item-right">
                                    <a href="/">
                                        <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                    </a>
                                </div>
                            </li>
                            <li className="data-item">
                                <div className="data-item-left">
                                    <div className="data-item-left-inner">
                                        <h2 className="text-title text-color">How to Ask for Help at Work</h2>
                                        <p className="data-item-detail summy-color">
                                            The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                        </p>
                                        <div className="text-info">
                                            <p className="text-author">Forge</p>
                                            <p className="text-time">2018-09-00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="data-item-right">
                                    <a href="/">
                                        <img src="https://upload.jianshu.io/admin_banners/web_images/4677/a6d5d4ae2540976a7bd62e9db466b0301414d319.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="data-right">
                        <div className="data-left-title">
                            <p className="data-right-inner text-color">Popular on Medium</p>
                        </div>
                        <ul className="popular-data">
                            <li className="popular-item">
                                <p className="item-count">
                                    01
                                </p>
                                <div className="popular-data-item">
                                    <h2 className="data-item-title text-color">How to Ask for Help at Work</h2>
                                    <p className="data-item-detail summy-color">
                                        The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                    </p>
                                    <div className="text-info">
                                        <p className="text-author">Forge</p>
                                        <p className="text-time">2018-09-00</p>
                                    </div>
                                </div>
                            </li>
                            <li className="popular-item">
                                <p className="item-count">
                                    01
                                </p>
                                <div className="popular-data-item">
                                    <h2 className="data-item-title text-color">How to Ask for Help at Work</h2>
                                    <p className="data-item-detail summy-color">
                                        The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                    </p>
                                    <div className="text-info">
                                        <p className="text-author">Forge</p>
                                        <p className="text-time">2018-09-00</p>
                                    </div>
                                </div>
                            </li>
                            <li className="popular-item">
                                <p className="item-count">
                                    01
                                </p>
                                <div className="popular-data-item">
                                    <h2 className="data-item-title text-color">How to Ask for Help at Work</h2>
                                    <p className="data-item-detail summy-color">
                                        The Secretary of State’s whole career has revolved around excusing human rights violations and cozying up to dictators.
                                    </p>
                                    <div className="text-info">
                                        <p className="text-author">Forge</p>
                                        <p className="text-time">2018-09-00</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}
export default Base;
