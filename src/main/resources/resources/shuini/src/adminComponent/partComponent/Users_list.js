import React, { Component } from 'react';
import './News_list.css';

export default class Users_list extends Component{
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
          <h2 >用户列表</h2>
          <h4 >您可以管理用户。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(7)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>新建用户</button> 
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
                <th rowSpan="1" colSpan="1" style={{'width':140}}>账号</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>描述</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>所在水泥厂</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>邮箱</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>状态</th>
                <th rowSpan="1" colSpan="1" style={{'width':180}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>admin</td>
                <td>拥有最大权限</td>
                <td>-1</td>
                <td>11111@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>ktzcy</td>
                <td>课题组成员</td>
                <td>-1</td>
                <td>1718@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>linbaoxian</td>
                <td>水泥厂用户</td>
                <td>-1</td>
                <td>linbaoxian@163.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>sanxiashuini</td>
                <td>水泥厂用户</td>
                <td>-1</td>
                <td>178791827@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>wang</td>
                <td>项目组负责人1</td>
                <td>-1</td>
                <td>178791827@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>zhang</td>
                <td>水泥厂用户1</td>
                <td>-1</td>
                <td>178791827@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>zhao</td>
                <td>项目组负责人2</td>
                <td>-1</td>
                <td>11@163.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>zhouran</td>
                <td>课题组负责人8</td>
                <td>-1</td>
                <td>178791827@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
                  <button className="action">修改</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
               <td>zhuanjia</td>
                <td>专家</td>
                <td>-1</td>
                <td>121212@qq.com</td>
                <td>已激活</td>
                <td>
                  <button className="action">冻结</button>
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