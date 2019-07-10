import React, {Component} from 'react';
import logo from '../images/blog.jpg';
import {Button, Modal, Input,Form, Icon, Checkbox} from 'antd';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal1Visible: false,
            modal2Visible: false,
            text: '登录系统',
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
            text: '注册系统'
        });
    }
    // 登录
    setModal1Login(modal1Visible) {
        this.setState({
            modal1Visible,
            text: '登录系统'
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
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
                    onCancel={() => this.setModal1Visible(false)}
                >
                 <div>
                     <Form onSubmit={this.handleSubmit} className="login-form">
                         <Form.Item>
                             {getFieldDecorator('username', {
                                 rules: [{ required: true, message: 'Please input your username!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     placeholder="Username"
                                 />,
                             )}
                         </Form.Item>
                         <Form.Item>
                             {getFieldDecorator('password', {
                                 rules: [{ required: true, message: 'Please input your Password!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     type="password"
                                     placeholder="Password"
                                 />,
                             )}
                         </Form.Item>
                         <Form.Item>
                             {getFieldDecorator('remember', {
                                 valuePropName: 'checked',
                                 initialValue: true,
                             })(<Checkbox>Remember me</Checkbox>)}
                             <Button type="primary" block htmlType="submit" className="login-form-button">Log in</Button>
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
export default  Form.create()(Header);
