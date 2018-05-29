import React, { Component } from 'react';
import './News_list.css';

export default class Create_role extends Component{
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
          <h2 >新建角色</h2>
          <h4 >您可以创建新的角色。</h4>
          <button className="create_news" onMouseOver={() => {this.onChangeNum(11)}} onMouseOut={() => {this.onChangeNumToo()}} onClick={() => {this.onChangeBody()}}>查看角色列表</button> 
          <div className="ques_box col-md-12 col-sm-12">
            <div>
              <h6 style={{"font-weight": 'bold'}}>填写角色信息</h6>
            </div>
            <form>
              <div className="box_body">
                <div className="form-group">
                  <label for="roleName">名称</label>
                  <input className="form-control" id="roleName" placeholder="请输入REST接口url" type="text" />
                </div>
                <div className="form-group">
                  <label for="roleDesc">角色描述</label>
                  <input className="form-control" id="roleDesc" placeholder="请输入接口的描述信息" type="text" />
                </div>
                <div className="form-group">
                  <label for="method">访问接口</label>
                  <div id="method">
                    <table className="table">
                      <tbody >
                        <tr className="col-sm-12">
                          <td className="col-sm-4"><input value="3" name="privilege" type="checkbox" />获取用户缩略信息[GET]</td>
                          <td className="col-sm-4"><input value="4" name="privilege" type="checkbox" />访问后台系统home页面[GET]</td>
                          <td className="col-sm-4"><input value="5" name="privilege" type="checkbox" />访问后台系统控制面板[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="6" name="privilege" type="checkbox" />访问新闻列表页面[GET]</td>
                          <td><input value="7" name="privilege" type="checkbox" />加载新闻列表页数据[GET]</td>
                          <td><input value="8" name="privilege" type="checkbox" />访问新建新闻页[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="9" name="privilege" type="checkbox" />发布新闻[POST]</td>
                          <td><input value="10" name="privilege" type="checkbox" />删除新闻[DELETE]</td>
                          <td><input value="11" name="privilege" type="checkbox" />获取新闻详情[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="12" name="privilege" type="checkbox" />切换新闻发布与暂停状态[PUT]</td>
                          <td><input value="13" name="privilege" type="checkbox" />访问问卷模板创建页面[GET]</td>
                          <td><input value="14" name="privilege" type="checkbox" />访问问卷模板列表页面[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="15" name="privilege" type="checkbox" />临时保存问卷模板，包含更新功能[POST]</td>
                          <td><input value="16" name="privilege" type="checkbox" />临时保存问卷模板，包含更新功能[PUT]</td>
                          <td><input value="17" name="privilege" type="checkbox" />获取问卷模板列表[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="18" name="privilege" type="checkbox" />删除问卷模板[DELETE]</td>
                          <td><input value="19" name="privilege" type="checkbox" />发布问卷模板[PUT]</td>
                          <td><input value="20" name="privilege" type="checkbox" />转到问卷模板详情页[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="23" name="privilege" type="checkbox" />进入新建用户界面[GET]</td>
                          <td><input value="24" name="privilege" type="checkbox" />进入用户列表页面[GET]</td>
                          <td><input value="25" name="privilege" type="checkbox" />获取用户列表数据[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="26" name="privilege" type="checkbox" />删除用户[DELETE]</td>
                          <td><input value="27" name="privilege" type="checkbox" />新增用户[POST]</td>
                          <td><input value="28" name="privilege" type="checkbox" />进入用户编辑页面[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="29" name="privilege" type="checkbox" />获取用户信息编辑页面数据[GET]</td>
                          <td><input value="30" name="privilege" type="checkbox" />更新用户信息[PUT]</td>
                          <td><input value="31" name="privilege" type="checkbox" />访问角色创建页面[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="32" name="privilege" type="checkbox" />创建角色[POST]</td>
                          <td><input value="33" name="privilege" type="checkbox" />进去角色列表页面[GET]</td>
                          <td><input value="34" name="privilege" type="checkbox" />获取角色列表数据[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="35" name="privilege" type="checkbox" />删除角色信息[DELETE]</td>
                          <td><input value="36" name="privilege" type="checkbox" />进入角色编辑页面[GET]</td>
                          <td><input value="37" name="privilege" type="checkbox" />获取角色编辑页面数据[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="38" name="privilege" type="checkbox" />更新角色信息[PUT]</td>
                          <td><input value="39" name="privilege" type="checkbox" />进入接口创建页面[GET]</td>
                          <td><input value="40" name="privilege" type="checkbox" />创建新接口[POST]</td>
                        </tr>
                        <tr>
                          <td><input value="41" name="privilege" type="checkbox" />进入接口列表页面[GET]</td>
                          <td><input value="42" name="privilege" type="checkbox" />获取接口列表数据[GET]</td>
                          <td><input value="43" name="privilege" type="checkbox" />删除接口[DELETE]</td>
                        </tr>
                        <tr>
                          <td><input value="44" name="privilege" type="checkbox" />进入系统参数控制页面[GET]</td>
                          <td><input value="45" name="privilege" type="checkbox" />刷新ACL列表[GET]</td>
                          <td><input value="46" name="privilege" type="checkbox" />强制退出其他用户[GET]</td>
                        </tr>
                        <tr>
                          <td><input value="47" name="privilege" type="checkbox" />登记问卷邀请[GET]</td>
                          <td><input value="48" name="privilege" type="checkbox" />问卷邀请登记列表[GET]</td>
                          <td><input value="50" name="privilege" type="checkbox" />保存问卷[POST]</td>
                        </tr>
                        <tr>
                          <td><input value="51" name="privilege" type="checkbox" />提交问卷[PUT]</td>
                  
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="box_footer">
                <input id="submit" value="提交" type="button" /> 
              </div>
            </form>
          </div>    
        </div>
      </div>
		)
	}
}