import React, { Component } from 'react';
import './News_list.css';

export default class Role_list extends Component{
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
          <h2 >角色列表</h2>
          <h4 >您可以创建新的角色，也可以查看角色列表。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(12)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>新建角色</button> 
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
                <th rowSpan="1" colSpan="1" style={{'width':150}}>名字</th>
                <th rowSpan="1" colSpan="1" style={{'width':400}}>描述</th>
                <th rowSpan="1" colSpan="1" style={{'width':150}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>管理员</td>
                <td>拥有最大权限</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>项目组负责人</td>
                <td>课题组（赵，王）</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>水泥厂用户</td>
                <td>填写问卷</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>课题组负责人</td>
                <td>负责项目组的输入查看</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>专家组</td>
                <td>只负责查看</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>课题组成员</td>
                <td>查看</td>
                <td>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="row">
            <div className="col-md-5 col-sm-5">
              <div>第 1页 / 总1页</div>
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