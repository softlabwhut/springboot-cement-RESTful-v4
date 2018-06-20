/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-04-23 19:03
 * @version $Id$
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Layout, Menu } from 'antd';
import {HostPost} from "./ajax";
import {hashHistory,router,browserHistory,Link} from 'react-router';
import '../node_modules/antd/dist/antd.css';
import './Login.css';
import './Route/SRoute.js';
const { Header, Content, Footer, Sider } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            remember:false,
            errorMessage:'',
            waitSec:0
        }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    const {errorMessage,email,password,remember} = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        HostPost('/user/ulogin',{email,password}).then(({json,header}) => {
            if(json.status ===1){
                // localStorage.setItem('token',json.token);
                // localStorage.setItem('remember',json.remember);
                // this.props.signIn(json);
                 browserHistory.push('/user/home');
                console.log("***signIn",json);
            }else{
                if(json.message === "you have exceeded your rate limit."){
                    let waitSec = parseInt(header.get('retry-after'))+3;
                    this.setState({waitSec:waitSec--});
                    this.setState({errorMessage:"登录操作过于频繁，请稍后再试"});
                    const waitTimer = setInterval(() => {
                        this.setState({waitSec:waitSec--});
                        if(waitSec < 0){
                            clearInterval(waitSec);
                        }
                    },1000)
                }else{
                    this.setState({errorMessage:'账号或密码输入错误'});
                }
            }
        }).catch((error) => {
            notification['error']({
                message:"温馨提示",
                description:"网络错误！请稍后再试"
            });
        });
//         fetch("http://localhost:8080"+"/user/ulogin", {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
//             },
//             body: JSON.stringify({
//               email: values.email,
//               password: values.password,
//
//   }),
// }).then(response => response.json()).then(function(response) {
//             console.log('返回值[1代表登陆成功，0代表登陆失败]:')
//             console.log(response)
//             if(response.status===1){
//                 browserHistory.push("/user/home");
//             }else{
//                 alert('登陆失败')
//             }
//             console.log(response.status);
//         });
    }


    });

};


handleChangeEmail = (e) => {
      this.setState({email:e.target.value});
  };
  handleChangePassword = (e) => {
      this.setState({password:e.target.value});
  };
  handleChangeRemember = (e) => {
      this.setState({remember:e.target.checked});
  };
  render() {
    const {errorMessage,email,password,remember} = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
        <h2 id='pleaseLogin'>欢迎登录</h2>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入注册邮箱名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名，即注册邮箱" value={email} onChange={this.handleChangeEmail} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" value={password} onChange={this.handleChangePassword}/>
          )}
        </FormItem>
        <FormItem >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="remember">记住账号</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码？</a>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            登录
          </Button>
          或者<a href="/reg">注册账号！</a>
        </FormItem>
      </Form>
      <Footer style={{ textAlign: 'center' }} className="footer">
      SmartLab Design ©2018 Powered By 武汉理工大学智能技术实验室
    </Footer>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
