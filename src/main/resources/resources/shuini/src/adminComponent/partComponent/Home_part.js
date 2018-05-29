import React, { Component } from 'react';
import './Home_part.css';

export default class Home_part extends Component{
	constructor(props){
    super(props);
    this.state = {
      choose_num: this.props.choose
    }
  }
  onChangeNum(e){
    this.setState({
      choose_num: e
    })
  }
  onChangeNumToo(){
    this.setState({
      choose_num: this.props.choose
    })
  }
  onChangeBody(){
    this.props.onChange(this.state.choose_num)
  }
  render(){
		return(

			<div id="home_part">
        <div className="col-md-12 col-sm-12">
          <h2 >主面板</h2>
          <h4 >您可以通过以下的快捷方式快速访问系统。</h4>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="main_box">
                <a href="#" onMouseOver={() => {this.onChangeNum(8)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>
                  <i className="fa fa-group fa-5x"></i>
                  <a href="#"><h5>用户管理</h5></a>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="main_box">
                <a href="#" onMouseOver={() => {this.onChangeNum(4)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>
                  <i className="fa fa-bar-chart-o fa-5x"></i>
                  <a ><h5 >问卷模板管理</h5></a>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="main_box">
                <a href="#" onMouseOver={() => {this.onChangeNum(9)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>
                  <i className="fa fa-unlock-alt fa-5x"></i>
                  <a ><h5>权限控制</h5></a>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="main_box">
                <a href="#" onMouseOver={() => {this.onChangeNum(13)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>
                  <i className="fa fa-gears fa-5x"></i>
                  <a ><h5>系统管理</h5></a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}