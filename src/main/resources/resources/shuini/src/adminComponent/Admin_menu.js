import React, { Component } from 'react';
import './Admin_menu.css'
import { Modal, Button } from 'antd';
import { browserHistory } from 'react-router';

const confirm = Modal.confirm;
export default class Admin_menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      choose_num: this.props.choose
    }
  }
  onChangeNum(e){
    
    this.setState({
      choose_num: e 
    });
  }
  onChangeNumToo(){
    this.setState({
      choose_num: this.props.choose
    })
  }
  onChangeBody(){
    this.props.onChange(this.state.choose_num)
  }
  onOut(){
    //return alert("确认退出？")
    confirm({
    title: '确认退出?',
    content: '请谨慎操作...',
    onOk() {
      browserHistory.push('/');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
  }

  render(){

    return (
      <div className="menu">
        
        <div className="admin_img">
          <img src={require("../img/admin.jpg")} />
          <a className="fast_exit" onClick={this.onOut} >admin</a>
        </div>
        <div className="nav"> 
          <ul>
            <li>
              <a href="#" className="main-menu" onMouseOver={() => {this.onChangeNum(0)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-dashboard "></i>主面板</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-desktop"></i>新闻与通知</a>
              <ul>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(1)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-bell"></i>新闻中心</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(2)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-bell "></i>通知中心</a>
                </li>                                                     
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-bar-chart-o"></i>问卷管理</a>
              <ul>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(3)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-file"></i>新建问卷模板</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(4)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-file"></i>问卷模板列表</a>
                </li>                                                     
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-file-sound-o"></i>问卷邀请管理</a>
              <ul>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(5)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-file-text"></i>登记问卷邀请</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(6)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-file-text"></i>问卷邀请列表</a>
                </li>                          
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-group"></i>用户管理</a>
              <ul>                           
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(7)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-user"></i>创建用户</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(8)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-user"></i>用户列表</a>
                </li>                          
              </ul>
            </li>                    
            <li>
              <a href="#"><i className="fa fa-unlock-alt"></i>权限管理</a>
              <ul>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(9)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-key"></i>接口列表</a>
                </li>
                 <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(10)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-key"></i>新建接口</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(11)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-key"></i>角色列表</a>
                </li>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(12)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-key"></i>新建角色</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i className="fa fa-gears"></i>系统控制面板</a>
              <ul>
                <li>
                  <a href="#" onMouseOver={() => {this.onChangeNum(13)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}><i className="fa fa-gear"></i>系统参数</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}

