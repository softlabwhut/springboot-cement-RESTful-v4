/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-04-23 19:03
 * @version $Id$
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import '../node_modules/antd/dist/antd.css';
import './Login.css';
import './Route/SRoute.js';
const { Header, Content, Footer, Sider } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
        <h2 id='pleaseLogin'>欢迎登录</h2>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名，即注册邮箱" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
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
          <Button type="primary" htmlType="submit" className="login-form-button">
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
