import React, { Component } from 'react';
import './News_list.css';

export default class Ques_temp extends Component{
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
          <h2 >问卷模板列表</h2>
          <h4 >您可以管理已经创建的问卷模板，或创建新的问卷模板。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(3)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>创建新问卷模板</button> 
          <table className="col-md-12 col-sm-12">
            <thead>
              <tr>
                <th rowSpan="1" colSpan="1" style={{'width':140}}>问卷名称</th>
                <th rowSpan="1" colSpan="1" style={{'width':200}}>问卷描述</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>生效时间</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>失效时间</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>状态</th>
                <th rowSpan="1" colSpan="1" style={{'width':180}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>2015信息简表</td>
                <td>2015</td>
                <td>2016/6/01 08:00 </td>
                <td>2017/6/03 08:00 </td>
                <td>已发布</td>
                <td>
                  <button className="action">查看问卷</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>测试问卷</td>
                <td>这是用来测试的问卷</td>
                <td>2017/1/04 08:00 </td>
                <td>2017/1/06 08:00 </td>
                <td>已发布</td>
                <td>
                  <button className="action">查看问卷</button>                                                                        
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>2018水泥模板</td>
                <td>最新版本</td>
                <td>2017/7/01 08:00 </td>
                <td>2020/2/11 08:00 </td>
                <td>已发布</td>
                <td>
                  <button className="action">查看问卷</button>                                                                        
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