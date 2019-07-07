import React, { Component } from 'react';
import {Button,Input} from 'antd';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'zhangsan1', //账号
      pwd: '122123', // 密码
      realname: '张三121'
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.addNew = this.addNew.bind(this)
    this.updateBlog = this.updateBlog.bind(this)
    this.deleteBlog = this.deleteBlog.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
      axios({
        method: 'GET',
        url: '/api/blog/list'
        });
        axios({
          method: 'GET',
          url: '/api/user/login-test'
          });
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
    handleRegister() {
      const {username, pwd, realname} = this.state
      axios({
        method: 'POST',
        url: 'api/user/register',
        data: {
            "username": username,
            "password": pwd,
            "realname": realname
        }
        });
    }
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
    addNew() {
      axios({
        method: 'POST',
        url: 'api/blog/new',
        data: {
            "title": 'test',
            "content": 'react'
        }
        });
    }
    updateBlog() {
      axios({
        method: 'POST',
        url: 'api/blog/update',
        data: {
            "id": 10,
            "title": new Date(),
            "content": 'react3'
        }
        });
    }
    deleteBlog() {
      axios({
        method: 'POST',
        url: 'api/blog/del',
        data: {
            "id": 10
        }
        });
    }
  render() {
    return (
      <div>
          <Input placeholder="账号" onChange={(v)=>this.handleChange('username',v)} />
          <Input placeholder="密码" onChange={(v)=>this.handleChange('pwd',v)} />
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          <Button type="primary" onClick={this.handleRegister}>注册博客</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button type="primary" onClick={this.handleLogin}>登录博客</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          <Button type="primary" onClick={this.addNew}>新建博客</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button type="primary" onClick={this.updateBlog}>更新博客</Button>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button type="primary" onClick={this.deleteBlog}>删除博客</Button>
          <br/>
      </div>
    );
  }
}

export default Login;