import React ,{ Component } from 'react';
import Home_part from '../adminComponent/partComponent/Home_part';
import Ques_temp from '../adminComponent/partComponent/Ques_temp';
import Create_news from '../adminComponent/partComponent/Create_news';
import QuestInput from '../component/QuesInput';
import ReactDOM from 'react-dom';
import UserNoticeList from '../component/UserNoticeList';
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
							
							<UserNoticeList {...this.props} />,
							<Ques_temp {...this.props} />,
							<QuestInput {...this.props} />,
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
         <div style={{color:'orange' ,textAlign:'center',position:'relative'}}>USER</div>
         <Button type="primary" icon="logout" size="small">退出</Button>
      	</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} onSelect= {this.onChangeNum.bind(this)} >
        <Menu.Item key="0" >
          <Icon type="user" />
          <span className="nav-text" >新闻通知</span>
        </Menu.Item>
        <Menu.Item key="1" >
          <Icon type="video-camera" />
          <span className="nav-text" >问卷查看</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="upload" />
          <span className="nav-text" >问卷填写</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="laptop" />
          <span className="nav-text" >数据查询</span>
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
