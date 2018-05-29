import React, { Component } from 'react';
import './News_list.css';

export default class Create_news extends Component{
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
          <h2 >新建新闻</h2>
          <h4 >您可以创建新闻，新闻会按照创建时间和优先级进行显示。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(1)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>返回</button> 
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6>填写新闻信息</h6>
            </div>
            <form>
              <div className="box_body">
                <div className="form-group">
                  <label for="title">标题</label>
                  <input className="form-control" id="title" placeholder="请输入新闻标题" type="text" />
                </div>
                <div className="form-group">
                  <label for="content">内容</label>
                  <input className="form-control" id="content" placeholder="请输入新闻内容" type="text" />
                </div>
                <div className="form-group">
                  <label for="url">跳转地址</label>
                  <input className="form-control" id="url" placeholder="请输入新闻点击后的跳转地址" type="text" />
                </div>
                <div className="form-group">
                  <label for="level">重要等级</label>
                  <select id="level" className="form-control">
                    <option value="1">重要</option>
                    <option value="2">临时</option>
                    <option value="3">普通</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="endTime">生效时间</label>
                  <input className="form-control" id="beginTime" placeholder="请选择新闻生效时间" type="datetime-local" />
                </div>
                <div className="form-group">
                  <label for="endTime">失效时间</label>
                  <input className="form-control" id="endTime" placeholder="请选择新闻失效时间" type="datetime-local" />
                </div>
              </div>
              <div className="box_footer">
                <input id="submit" value="发布" type="button" /> 
              </div>
            </form>
          </div>    
        </div>
      </div>
		)
	}
}