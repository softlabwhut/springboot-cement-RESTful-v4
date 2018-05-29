import React, { Component } from 'react';
import './Admin_head.css';

export default class Admin_head extends Component{
	render(){
		return(
			<div className="head">
				<div className="head_left">
			    <a href="#">欢迎进入后台管理</a>
				</div>
				<div className="head_right">
				  <img src={require("../img/logo-whut.png")} />
				</div>
			</div>
		)
	}
}