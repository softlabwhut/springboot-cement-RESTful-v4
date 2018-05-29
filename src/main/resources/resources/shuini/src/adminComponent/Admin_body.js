import React, { Component } from 'react';

import Home_part from './partComponent/Home_part';
import News_list from './partComponent/News_list';
import Notice_list from './partComponent/Notice_list';
import Create_ques from './partComponent/Create_ques';
import Ques_temp from './partComponent/Ques_temp';
import Regis_ques from './partComponent/Regis_ques';
import Ques_invite from './partComponent/Ques_invite';
import Create_user from './partComponent/Create_user';
import Users_list from './partComponent/Users_list';
import Port_list from './partComponent/Port_list';
import Create_port from './partComponent/Create_port';
import Role_list from './partComponent/Role_list';
import Create_role from './partComponent/Create_role';
import Syst_para from './partComponent/Syst_para';
import Create_news from './partComponent/Create_news';
import Create_notic from './partComponent/Create_notic';

export default class Admin_body extends Component{
	constructor(props){
		super(props);
		this.state = {
			choose_num: this.props.choose,
			choose_arr: [
							<Home_part {...this.props} />,
							<News_list {...this.props} />,
							<Notice_list {...this.props} />,
							<Create_ques {...this.props} />,
							<Ques_temp {...this.props} />,
							<Regis_ques />,
							<Ques_invite />,
							<Create_user {...this.props} />,
							<Users_list {...this.props} />,
							<Port_list {...this.props} />,
							<Create_port {...this.props} />,
							<Role_list {...this.props} />,
							<Create_role {...this.props} />,
							<Syst_para />,
							<Create_news {...this.props} />,
							<Create_notic {...this.props} />
							]
		}

	}
	
	render(){
		return(
			<div className="choose">
				
				{this.state.choose_arr[this.props.choose]}
			</div>
		)
	}
}