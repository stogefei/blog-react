import React, { Component } from 'react';
import {Button,Input} from 'antd';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'zhangsan', //账号
      pwd: '123' // 密码
    }
    this.handleLogin = this.handleLogin.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key,val) {
        console.log(key,val.target.value)
        this.setState({
            [key]:val.target.value
        })
       
    }
    // handleChange(e) {
    //     console.log(e.target.value)
       
    // }
    handleLogin(){
    console.log(this.state)
    const {username, pwd} = this.state

    axios({
        method: 'POST',
        url: 'api/user/login',
        data: {
            "username": username,
            "password": pwd
        }
        });
    } 

  render() {
    return (
      <div>
          <Input placeholder="账号" onChange={(v)=>this.handleChange('username',v)} />
          <Input placeholder="密码" onChange={(v)=>this.handleChange('pwd',v)} />
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          <Button type="primary" onClick={this.handleLogin}>Button</Button>
      </div>
    );
  }
}

export default Login;