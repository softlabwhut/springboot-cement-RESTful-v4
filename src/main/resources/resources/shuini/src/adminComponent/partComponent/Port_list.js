import React, { Component } from 'react';
import './News_list.css';

export default class Port_list extends Component{
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
			<div id="news_list">
        <div className="col-md-12 col-sm-12">
          <h2 >接口列表</h2>
          <h4 >您可以创建新的接口，也可以查看接口列表。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(10)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>创建接口</button> 
          <label style={{"margin-left":'720px'}}>每页
            <select id="view_option" >
              <option value="-1">10</option>
              <option value="0">15</option>
              <option value="1">12</option>
            </select>条
          </label>
          <table className="col-md-12 col-sm-12">
            <thead>
              <tr>
                <th rowSpan="1" colSpan="1" style={{'width':300}}>url</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>method</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>描述</th>
                <th rowSpan="1" colSpan="1" style={{'width':150}}>操作</th>
                
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>/user/info.html</td>
                <td>GET</td>
                <td>获取用户缩略信息</td>
                <td>                                    
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>/main/home.html</td>
                <td>GET</td>
                <td>访问后台系统home页面</td>
                <td>                               
                  <button className="action">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
					<div className="row">
            <div className="col-md-5 col-sm-5">
              <div>第1页 / 总1页</div>
            </div>
            <div className="change_page col-md-6 col-sm-6">
              <ul >
                <li className="page_name"><a href="#">上一页</a></li>
                <li className="page_name"><a href="#">1</a></li>
                <li className="page_name"><a href="#">下一页</a></li>
              </ul>          
            </div>
          </div>
        </div>
      </div>
		)
	}
}