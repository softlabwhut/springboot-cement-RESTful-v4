import React, { Component } from 'react';
import './News_list.css';

export default class Create_users extends Component{
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
          <h2 >创建新用户</h2>
          <h4 >您可以创建新的用户。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(8)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>查看用户列表</button> 
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6 style={{"font-weight": 'bold'}}>填写用户信息</h6>
            </div>
            <form>
              <div className="box_body">
                <div className="form-group">
                  <label for="accountId">用户名</label>
                  <input className="form-control" id="accountId" placeholder="请输入用户名" type="text" />
                </div>
                <div className="form-group">
                  <label for="password">密码</label>
                  <input className="form-control" id="password" placeholder="请输入初始密码" type="text" />
                </div>
                <div className="form-group">
                  <label for="description">描述</label>
                  <input className="form-control" id="description" placeholder="请输入相关描述信息" type="text" />
                </div>
                <div className="form-group">
                  <label for="email">邮箱</label>
                  <input className="form-control" id="email" placeholder="问卷失效时间" type="text" />
                </div>
                <div class="form-group">
                  <label for="status">选择用户状态</label>
                  <select className="form-control" id="status">
                      <option value="1">激活</option>
                      <option value="2">冻结</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="factoryId">选择用户所在水泥厂</label>
                  <select class="form-control" id="factoryId">
                      <option value="-1">测试用水泥厂</option>
                      <option value="1">其他</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="roleList">用户角色</label>
                  <div id="roleList">
                    <table className="table">
                    <tbody>
                      <tr>
                        <td><input value="19" name="role" type="checkbox" />管理员</td>
                        <td><input value="20" name="role" type="checkbox" />项目组负责人</td>
                        <td><input value="22" name="role" type="checkbox" />水泥厂用户</td>
                      </tr>
                      <tr>
                        <td><input value="23" name="role" type="checkbox" />课题组负责人</td>
                        <td><input value="24" name="role" type="checkbox" />专家组</td>
                        <td><input value="25" name="role" type="checkbox" />课题组成员</td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="box_footer">
                <input id="submit" value="创建用户" type="button" /> 
              </div>
            </form>
          </div>    
        </div>
      </div>
		)
	}
}