import React, {Component} from 'react';
import logo from '../images/blog.jpg';
import {Button, Modal, Input,Form, Icon, Checkbox, message} from 'antd';
import {loginByUsername, registerByUsername} from '../api/login'
import {ERROR_OK} from '../utils/stateCode'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal1Visible: false,
            modal2Visible: false,
            text: '登录系统',
            loginText: '注册'
        };
    }
    // 取消
    setModal1Visible(modal1Visible) {
        this.setState({
            modal1Visible
        });
    }
    // 注册
    setModal1Register(modal1Visible) {
        this.setState({
            modal1Visible,
            text: '注册系统',
            loginText: '注册',
        });
    }
    // 登录
    setModal1Login(modal1Visible) {
        this.setState({
            modal1Visible,
            text: '登录系统',
            loginText: '登录'
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(this.state.loginText === '登录') {
                    loginByUsername(values.username, values.password)
                        .then(result => {
                            console.log(result, 'result')
                            if (result.data.errno === ERROR_OK) {
                                message.success('登录成功', this.setState({
                                    modal1Visible: false
                                }))
                            } else {
                                message.error(result.data.message)
                            }
                        })
                } else {
                    registerByUsername(values.username, values.password)
                        .then(result => {
                            console.log(result, 'result')
                            if (result.data.errno === ERROR_OK) {
                                message.success('注册成功，请登录', this.setState({
                                    modal1Visible: false
                                }))
                            } else {
                                message.error(result.data.message)
                            }
                        })
                }
            }
        })
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="home-header">
                <Modal
                    title={this.state.text}
                    style={{ top: 100 }}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                    visible={this.state.modal1Visible}
                    onOk={() => this.subMit()}
                    onCancel={() => this.setModal1Visible(false)}>

                 <div>
                     <Form onSubmit={this.handleSubmit} className="login-form">
                         <Form.Item>
                             {getFieldDecorator('username', {
                                 rules: [{ required: true, message: '请输入账号!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     placeholder="请输入账户"
                                 />,
                             )}
                         </Form.Item>
                         <Form.Item>
                             {getFieldDecorator('password', {
                                 rules: [{ required: true, message: '请输入密码!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     type="password"
                                     placeholder="请输入密码"
                                 />,
                             )}
                         </Form.Item>
                         <Form.Item>
                             {/*{getFieldDecorator('remember', {*/}
                                 {/*valuePropName: 'checked',*/}
                                 {/*initialValue: true,*/}
                             {/*})(<Checkbox>记住密码</Checkbox>)}*/}
                             <Button type="primary" block htmlType="submit" className="login-form-button">{this.state.loginText}</Button>
                         </Form.Item>
                     </Form>
                 </div>
                </Modal>

                <div className="home-header-box">
                    <div className="home-logo">
                        <img src={logo} className="logo" alt=""/>
                    </div>
                    <div className="home-right">
                        <p>
                            <a href="#" onClick={() => this.setModal1Login(true)} className="sign-btn">登录</a>
                        </p>
                        <p>
                            <Button className="register-btn" onClick={() => this.setModal1Register(true)}>注册</Button>
                        </p>
                    </div>
                </div>
                <div className="nav-tab">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">OneZero</a>
                        </li>
                        <li>
                            <a href="/">Elemental</a>
                        </li>
                        <li><a href="/">GEN</a></li>
                        <li><a href="/">Startups</a></li>
                        <li><a href="/">Self</a></li>
                    </ul>
                </div>
            </div>
        )
    };
}

// export default Header;
export default  Form.create({ name: 'normal_login' })(Header);
