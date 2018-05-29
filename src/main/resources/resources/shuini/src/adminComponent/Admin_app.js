import React,{Component} from 'react';
import './Admin_app.css';
import Admin_head from './Admin_head';
import Admin_menu from './Admin_menu';
import Admin_body from './Admin_body';
class Admin_app extends Component{
  constructor(props){
    super(props);
    this.state = {
      choose_num:0
    }
  }
  onChangeNum(e){
    this.setState({
      choose_num: e
    })
  }
  render(){

    return(
      <div className="all">
        <div className="all_head">
          <Admin_head />
    	  </div>
    	  <div className="all_menu">
    	  	<Admin_menu choose={this.state.choose_num} onChange={this.onChangeNum.bind(this)}/>
    	  </div>
    	  <div className="all_body">        
    	  	<Admin_body choose={this.state.choose_num} onChange={this.onChangeNum.bind(this)}/>
    	  </div>
    	</div> 
    )
  }
}

export default Admin_app;