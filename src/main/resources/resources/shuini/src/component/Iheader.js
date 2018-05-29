import React, { Component } from 'react';
import './Iheader.css'

export default class Iheader extends Component {
  
  render(){
    return (
      <div className="container">
        <div className="col-md-12 col-sm-12">
          <a className="box col-md-5 col-sm-5" href="#">
            <img src={require("../img/logo-whut.png")}  alt="" />
          </a>
          <nav className="box col-md-7 col-sm-7">
            <ul>
              <a href="#">首页</a>
              <a href="#about">关于我们</a>
              <a href="#hero">最新资讯</a>
              <a href="#survey">用户手册</a>
              <a href="login">账户登录</a>
              <a href="admin.html">后台管理</a>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

