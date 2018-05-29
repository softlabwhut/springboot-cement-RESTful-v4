import React, { Component } from 'react';
import './News_list.css';

export default class Notice_list extends Component{
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
          <h2 >通知列表</h2>
          <h4 >您可以发布最新通知，也可以管理往常通知。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(15)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>新建通知</button> 
          <table className="col-md-12 col-sm-12">
            <thead>
              <tr>
                <th rowSpan="1" colSpan="1" style={{'width':140}}>标题</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>新闻等级</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>生效时间</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>失效时间</th>
                <th rowSpan="1" colSpan="1" style={{'width':160}}>发布时间</th>
                <th rowSpan="1" colSpan="1" style={{'width':100}}>状态</th>
                <th rowSpan="1" colSpan="1" style={{'width':180}}>操作</th>
              </tr>
            </thead>
            <tbody id="tbody">
              <tr>
                <td>2018水泥模板</td>
                <td>重要</td>
                <td>2017/7/28 14:25 </td>
                <td>2020/2/11 08:00 </td>
                <td>2017/7/28 14:25 </td>
                <td>显示中</td>
                <td>
                  <button className="action">查看</button>                                    
                  <button className="action">暂停</button>                                    
                  <button className="action">删除</button>
                </td>
              </tr>
              <tr>
                <td>2018问卷模板</td>
                <td>重要</td>
                <td>2016/6/08 10:36 </td>
                <td>2016/7/09 08:00 </td>
                <td>2016/6/08 10:36 </td>
                <td>显示中</td>
                <td>
                  <button className="action">查看</button>                                    
                  <button className="action">暂停</button>                                    
                  <button className="action">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
					<div className="row">
            <div className="col-md-5 col-sm-5">
              <div>第 {this.state.num}页 / 总{this.state.num}页</div>
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