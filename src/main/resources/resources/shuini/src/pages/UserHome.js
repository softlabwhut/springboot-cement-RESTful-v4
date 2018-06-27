import React ,{ Component } from 'react';
import Home_part from '../adminComponent/partComponent/Home_part';
import News_list from '../adminComponent/partComponent/News_list';
import Notice_list from '../adminComponent/partComponent/Notice_list';
import Create_ques from '../adminComponent/partComponent/Create_ques';
import Ques_temp from '../adminComponent/partComponent/Ques_temp';
import Regis_ques from '../adminComponent/partComponent/Regis_ques';
import Ques_invite from '../adminComponent/partComponent/Ques_invite';
import Create_user from '../adminComponent/partComponent/Create_user';
import Users_list from '../adminComponent/partComponent/Users_list';
import Port_list from '../adminComponent/partComponent/Port_list';
import Create_port from '../adminComponent/partComponent/Create_port';
import Role_list from '../adminComponent/partComponent/Role_list';
import Create_role from '../adminComponent/partComponent/Create_role';
import Syst_para from '../adminComponent/partComponent/Syst_para';
import Create_news from '../adminComponent/partComponent/Create_news';


import ReactDOM from 'react-dom';
import { Button, Layout, Menu, Icon } from 'antd';
import './UserHome.css';
import { Avatar} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class MyHome extends React.Component{
  constructor(props){
		super(props);
		this.state = {
			choose_num: 0,
			choose_arr: [
							
							<Notice_list {...this.props} />,
							<Ques_temp {...this.props} />,
							<Ques_invite />,
							<Create_news {...this.props} />,
							
							]
		}

  }
  onChangeNum(e){
    this.setState({
      choose_num: e.key,
    })
  }
   render(){
   	return (
   	<div className="layout">
    <Layout style={{height:'100%'}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      	<div className="logo" style={{height:'100px'}}>
 		    <div className="display" style={{display:'flex',justifyContent:'center',marginTop:10}}>
    		<Avatar style={{ backgroundColor: '#87d068'}} icon="user" size="large"/>
    		</div>
         <div style={{color:'orange' ,textAlign:'center'}}>USER</div>
         <Button type="primary" icon="logout" size="small">退出</Button>
      	</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onSelect= {this.onChangeNum.bind(this)} >
        <Menu.Item key="0" >
          <Icon type="user" />
          <span className="nav-text"  >新闻通知</span>
        </Menu.Item>
        <Menu.Item key="1" >
          <Icon type="video-camera" />
          <span className="nav-text" >问卷查看</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="upload" />
          <span className="nav-text" >数据查询</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="laptop" />
          <span className="nav-text" >更多</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} >
        <div className="head_right">
          <img src={require("../img/logo-whut.png")} />
        </div>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', height:'100%', minHeight: 520 }}>
               <div className="choose">
				             
                {this.state.choose_arr[this.state.choose_num]} 
			         </div>
      
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        SmartLab Design ©2018 Powered By 武汉理工大学智能技术实验室
      </Footer>
    </Layout>
  </Layout>
   </div>
   );

}
}
export default MyHome;
