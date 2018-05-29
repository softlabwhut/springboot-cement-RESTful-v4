import React, { Component } from 'react';
import './News_list.css';

export default class Create_port extends Component{
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
          <h2 >新建接口</h2>
          <h4 >您可以创建新的REST访问接口。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(9)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>查看接口列表</button> 
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6 style={{"font-weight": 'bold'}}>填写接口信息</h6>
            </div>
            <form>
              <div className="box_body">
                <div className="form-group">
                  <label for="url">接口地址</label>
                  <input className="form-control" id="url" placeholder="请输入REST接口url" type="text" />
                </div>
                <div className="form-group">
                  <label for="method">方法类型</label>
                  <div id="method">
                    <input value="GET" name="method" type="checkbox" /> GET &nbsp;&nbsp;&nbsp;&nbsp;
                    <input value="POST" name="method" type="checkbox" /> POST &nbsp;&nbsp;&nbsp;&nbsp;
                    <input value="PUT" name="method" type="checkbox" /> PUT &nbsp;&nbsp;&nbsp;&nbsp;
                    <input value="DELETE" name="method" type="checkbox" /> DELETE
                  </div>
                </div>
                <div className="form-group">
                  <label for="portDesc">接口描述</label>
                  <input className="form-control" id="portDesc" placeholder="请输入接口的描述信息" type="text" />
                </div>
                
              </div>
              <div className="box_footer">
                <input id="submit" value="提交" type="button"/> 
              </div>
            </form>
          </div>    
        </div>
      </div>
		)
	}
}