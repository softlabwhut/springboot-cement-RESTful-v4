import React, { Component } from 'react';
import './News_list.css';

export default class Create_ques extends Component{
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
          <h2 >新建问卷模板</h2>
          <h4 >您可以创建新的问卷模板。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(4)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>查看问卷模板列表</button> 
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6 style={{"font-weight": 'bold'}}>填写模板信息</h6>
            </div>
            <form>
              <div className="box_body">
                <div className="form-group">
                  <label for="name">问卷模板名称</label>
                  <input className="form-control" id="name" placeholder="请输入模板名称" type="text" />
                </div>
                <div className="form-group">
                  <label for="desc">问卷模板描述</label>
                  <input className="form-control" id="desc" placeholder="问卷模板描述" type="text" />
                </div>
                <div className="form-group">
                  <label for="beginTime">生效时间</label>
                  <input className="form-control" id="beginTime" placeholder="问卷生效时间" type="text" />
                </div>
                <div className="form-group">
                  <label for="endTime">失效时间</label>
                  <input className="form-control" id="endTime" placeholder="问卷失效时间" type="text" />
                </div>
                <div className="form-group">
                  <label for="pageUrl">pageUrl</label>
                  <input className="form-control" id="pageUrl" placeholder="页面Url" type="text" />
                </div>
              </div>
              <div className="box_footer">
                <input id="submit" value="创建" type="button" /> 
              </div>
            </form>
          </div>    
        </div>
      </div>
		)
	}
}