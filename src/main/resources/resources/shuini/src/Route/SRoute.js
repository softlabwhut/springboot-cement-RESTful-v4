import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {Router ,Redirect, Route , hashHistory } from 'react-router';
import {HostPost} from '../ajax'
import Login from '../Login';
import Reg from '../Reg';
import App from '../App';
import Admin_app from '../adminComponent/Admin_app';
import TestA from '../TestA';
import UserAdd from '../pages/UserAdd';
import UserHome from '../pages/UserHome';
import Home from '../pages/Home';
import MyFetch from '../api/MyFetch';
import Register from '../Register';
import IndexPage from '../component/IndexPage';


export default class SRoute extends Component {


    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/login" component={Login}>
                    <Route path="/login/A" component={TestA} />
                </Route>
                <Route path="/user/page" component={UserHome} />
                <Route path="/indexpage" component={IndexPage}/>
                <Route path="/reg" component={Register}/>
                <Route path="/user/" component={Home}/>
                <Route path="/user/add" component={UserAdd}/>
                <Route path="/fetch" component={MyFetch}/>
                <Route path="/!" component={TestA}/>
                <Route path="/user/home" component={Admin_app}/>
            </Router>
        )
    }
}
