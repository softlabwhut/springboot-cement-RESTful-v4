import React, { Component } from 'react';
import {notification} from 'antd';
import './News_list.css';
import {HostPost} from "../../ajax";

export default class Create_news extends Component{
	constructor(props){
    super(props);
    this.state = {
      choose_num: this.props.choose,
			title:'',
			content: '',
			author: '',

    }
  }
	onChangelocalNotice(e){
		this.setState({ localNotice: e.target.value })
	}
	onHandleSubmit(e){
		e.preventDefault();
		const {title,content,author}=this.state;
		HostPost('/articles/post',{title,content,author}).then(({json,header}) => {
				if(json.status=== 1){
				    return;
				}else{
						if(json.message === "you have exceeded your rate limit."){
								let waitSec = parseInt(header.get('retry-after'))+3;
								this.setState({waitSec:waitSec--});
								this.setState({errorMessage:"创建失败，请稍后再试"});
								const waitTimer = setInterval(() => {
										this.setState({waitSec:waitSec--});
										if(waitSec < 0){
												clearInterval(waitSec);
										}
								},1000)
					 }
						// else{
						//     this.setState({errorMessage:'账号或密码输入错误'});
						// }
				}
		}).catch((error) => {
				notification['error']({
						message:"温馨提示",
						description:"网络错误！请稍后再试"
				});
		});
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
          <h2 >新建通知</h2>
          <h4 >您可以创建通知，通知会按照创建时间和优先级进行显示。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(2)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>返回</button>
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6>填写通知信息</h6>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="box_body">
                <div className="form-group">
                  <label for="title">标题</label>
                  <input className="form-control" id="title" placeholder="请输入通知标题" type="text" />
                </div>
                <div className="form-group">
                  <label for="content">内容</label>
                  <input className="form-control" id="content" placeholder="请输入通知内容" type="text" />
                </div>
								<div className="form-group">
                  <label for="author">作者</label>
                  <input className="form-control" id="author" placeholder="请输入作者名" type="text" />
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
                  <label for="beginTime">生效时间</label>
                  <input className="form-control" id="beginTime" placeholder="请选择通知生效时间" type="datetime-local" />
                </div>
                <div className="form-group">
                  <label for="endTime">失效时间</label>
                  <input className="form-control" id="endTime" placeholder="请选择通知失效时间" type="datetime-local" />
                </div>
              </div>
              <div className="box_footer">
                <button id="submit"  htmlType="submit" >发布</button>
              </div>
            </form>
          </div>
        </div>
      </div>
		)
	}
}
