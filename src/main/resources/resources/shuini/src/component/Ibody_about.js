import React, { Component } from 'react';
import {Layout} from 'antd';
import './Ibody_about.css';
const {Footer } = Layout;


export default class Ibody_about extends Component {
  constructor(props){
    super(props);
    this.state = {
      WXview: "none",
      SJview: "none"
    }
  }
  onShowWX(){
    this.setState({
      WXview: "block"
    })
  }
  onHideWX(){
    this.setState({
      WXview: "none"
    })
  }
  onShowSJ(){
    this.setState({
      SJview: "block"
    })
  }
  onHideSJ(){
    this.setState({
      SJview: "none"
    })
  }
  render(){
    return (
      <div id="about">
        <div className="container">
          <hr />
          <h3>关于我们</h3>
          <hr />
        </div>
        <div className="content col-md-12 col-sm-12">
          <div className="row">
            <div className="row-1 col-md-4 col-sm-4">
              <h3>关于我们</h3>
              <li><a className="fa fa-clock-o fa-2x"></a>
                <h4>2014-2017</h4>
              </li>
              <li><a className="fa fa-won fa-2x"></a>
                <h4>《我国水泥工业环境状况调查》<p/>科技基础性工作专题网站</h4>
              </li>
            </div>
            <div className="row-2 col-md-4 col-sm-4">
              <h3>友情链接</h3>
              <br/><br/>
              <li>
                <a className="fa fa-university fa-2x"></a>
                <br/><br/>
                <a className="link" href="http://i.whut.edu.cn/"><h4>武汉理工大学</h4></a>
              </li>
            </div>
            <div className="row-3 col-md-3 col-sm-3">
              <h3>联系我们</h3>
              <span className="info">
                <li>
                  <i className="fa fa-phone fa-2x"></i>
                  <a onMouseOver={() => {this.onShowSJ()}}  onMouseOut={() => {this.onHideSJ()}}><h4>13163353507</h4></a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-2x"></i>
                  <h4>danielwu927@outlook.com</h4>
                </li>
                <li>
                  <i className="fa fa-weixin fa-2x"></i>
                  <a onMouseOver={() => {this.onShowWX()}}  onMouseOut={() => {this.onHideWX()}}><h4>微信</h4></a>
                </li>
                <li id="weixin" style={{display:this.state.WXview}}>
                  <img style={{width: '100px', height: '100px'}} alt="" src={require("../img/clients/WX.jpg")} />
                </li>
                <li id="weixin" style={{display:this.state.SJview}}>
                  <img style={{width: '100px', height: '100px'}} alt="" src={require("../img/clients/SJ.png")} />
                </li>
              </span>
            </div>
          </div>
        </div>
        <Footer style={{ textAlign: 'center' }} >
        SmartLab Design ©2018 Powerd By 武汉理工大学智能技术实验室
        </Footer>

      </div>

    )
  }
}
