import React, {Component} from 'react';
import logo from '../images/blog.jpg';
import {connect} from 'react-redux';
import MD5 from 'blueimp-md5'
import {Button, Modal, Input,Form, Icon, Avatar, message,Menu, Dropdown} from 'antd';
import {loginByUsername, registerByUsername, logoutUserInfo} from '../api/user';
import {ERROR_OK} from '../utils/stateCode';
import {getUser} from '../redux/user.redux';
const pwdRules = {
    rules: [{ required: true, message: '请输入密码' },{min: 6, message: '长度至少为6'},{max:16,message: '长度不能大于16'}],
};
const realNameRules = {
    rules: [{ required: true, message: '请输入真实姓名' },{min: 6,message: '长度至少为6'},{max:16,message: '长度不能大于16'},{pattern:'^[a-zA-Z]+$',message:'只能输入英文'}],
};
const userName = {
    rules: [{ required: true, message: '请输入账号' },{min: 4,message: '长度至少为4'},{max:16,message: '长度不能大于16'}],
};
@connect(
    state=>state.user,
    {getUser}
)
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1Visible: false,
            modal2Visible: false,
            text: '登录系统',
            loginText: '注册',
            showName: false
        };
        this.logOut = this.logOut.bind(this)
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
            showName: true
        });
    }
    // 登录
    setModal1Login(modal1Visible) {
        this.setState({
            modal1Visible,
            text: '登录系统',
            loginText: '登录',
            showName: false
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(this.state.loginText === '登录') {
                    loginByUsername(values.name, MD5(values.pwd))
                        .then(result => {
                            console.log(result, 'result')
                            if (result.data.errno === ERROR_OK) {
                                message.success('登录成功',1,
                                    this.setState({
                                    modal1Visible: false
                                })).then(() => {
                                    this.props.getUser()
                                })
                            } else {
                                message.error(result.data.message)
                            }
                        })
                } else {
                    registerByUsername(values.name, MD5(values.pwd), values.realname)
                        .then(result => {
                            if (result.data.errno === ERROR_OK) {
                                message.success('注册成功，请登录', this.setState({
                                    modal1Visible: false
                                })).then(() => {
                                })
                            } else {
                                message.error(result.data.message)
                            }
                        })
                }
            }
        })
    };
    // 注销
    logOut() {
        logoutUserInfo()
            .then((res) =>{
                console.log(res)
                if(res.status === 200 && res.data.errno === 0) {
                    message.success('注销成功',1,
                        this.setState({
                            modal1Visible: false
                        })).then(() => {
                        window.location.reload()
                    })
                }
            })
    }
    componentWillMount() {
        this.props.getUser()
    }
    componentDidMount() {
        // console.log(this.props, 'props')
    }

    render() {
        const username = this.props.username;
        // const realname = this.props.realname;
        const showRealName =  this.state.showName
        const { getFieldDecorator } = this.props.form;
        const menu = (
            <Menu>
                <Menu.Item key="1">
                    <span >修改信息</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" onClick={this.logOut}>注销</Menu.Item>
            </Menu>
        );
        const user = (
            <div className="home-right">
                <p>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                            {username} <Icon type="down" />
                        </a>
                    </Dropdown>
                </p>
                <p>
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                </p>
            </div>
        );
        const log = (
            <div className="home-right">
                <p>
                    <a href="#" onClick={() => this.setModal1Login(true)} className="sign-btn">登录</a>
                </p>
                <p>
                    <Button className="register-btn" onClick={() => this.setModal1Register(true)}>注册</Button>
                </p>
            </div>
        );
        return (
            <div className="home-header">
                <div  className={`home-header-box ${this.props.showHeaderTab ? 'show-header' : ''}`}>
                    <div className="home-logo">
                        <img src={logo} className="logo" alt=""/>
                    </div>
                    {username ? user : log}
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
                                {getFieldDecorator('name', userName)(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入账户"
                                    />,
                                )}
                            </Form.Item>
                            {showRealName ?<Form.Item>
                                {getFieldDecorator('realname', realNameRules)(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入真实姓名"
                                    />,
                                )}
                            </Form.Item>:null}

                            <Form.Item>
                                {getFieldDecorator('pwd', pwdRules)(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block htmlType="submit" className="login-form-button">{this.state.loginText}</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        )
    };
}
// export default Header;
export default  Form.create({ name: 'normal_login' })(Header);
