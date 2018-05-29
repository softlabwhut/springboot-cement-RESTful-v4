import React, { Component } from 'react';
import './News_list.css';

export default class Ques_invite extends Component{
	
	render(){
		return(
			<div id="news_list">
        <div className="col-md-12 col-sm-12">
          <h2 >发放列表</h2>
          <h4 >您可以查看已发放问卷的工厂信息。</h4>
          <div className="row" style={{"margin-left":0}}>
            <h6 style={{"font-weight": 'bold'}}>登记已发问卷厂家</h6>
            <label style={{"margin-left":'675px'}}>每页
              <select id="view_option" >
                <option value="-1">10</option>
                <option value="0">15</option>
                <option value="1">12</option>
              </select>条
            </label>
          </div>

          <table className="col-md-12 col-sm-12">
            <thead>
              <tr>
                <th rowSpan="1" colSpan="1" style={{'width':50}}>编号</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>公司名称</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>公司地址</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>问卷名称</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>邀请人</th>
                <th rowSpan="1" colSpan="1" style={{'width':180}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>1</td>
                <td>北京水泥厂有限责任公司</td>
                <td>北京市昌平区马池口镇北小营村东</td>
                <td>2015信息简表</td>
                <td>zhao</td>
                <td>
                  <button className="action">已接受</button>                                                                        
                  <button className="action">查看</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>北京双山水泥集团水泥二厂</td>
                <td>北京市房山区河北镇磁家务村东</td>
                <td>2015信息简表</td>
                <td>zhao</td>
                <td>
                  <button className="action">已接受</button>                                                                        
                  <button className="action">查看</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>天津振兴水泥有限公司</td>
                <td> 天津市北辰区引河桥北</td>
                <td>2015信息简表</td>
                <td>admin</td>
                <td>
                  <button className="action">已接受</button>                                                                        
                  <button className="action">查看</button>
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