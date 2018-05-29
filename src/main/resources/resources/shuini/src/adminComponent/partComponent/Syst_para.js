import React, { Component } from 'react';
import './News_list.css';

export default class Syst_para extends Component{
	
	render(){
		return(
			<div id="news_list">
        <div className="col-md-12 col-sm-12">
          <h2 >系统参数控制</h2>
          <h4 >您可以查看，刷新以及更新系统相关参数。</h4>
          
          <table className="col-md-12 col-sm-12">
            <thead>
              <tr>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>#</th>
                <th rowSpan="1" colSpan="1" style={{'width':350}}>说明</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>1</td>
                <td>刷新系统ACL，一般用于增加或删除访问接口的情况</td>
                <td>                                    
                  <button className="action">刷新ACL列表</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>退出所有当前登录的用户</td>
                <td>                               
                  <button className="action">退出登录用户</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>创建问卷索引</td>
                <td>                               
                  <button className="action">创建索引</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
		)
	}
}