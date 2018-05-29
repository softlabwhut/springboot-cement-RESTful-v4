import React, { Component } from 'react';
import $ from 'jquery';

export default class MyFetch extends Component{
    constructor(props){
        super(props);
        this.state = {
            alls:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/user')
            .then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    this.setState({
                        alls:data
                    });
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });
    }
    render(){
        console.log("arr");
        console.log(this.state.alls);
        return (
            <div>
                {
                    this.state.alls.map(function (item, index) {
                        return(
                            <ul key="index">
                                <li> 序号：{index}</li>
                                <li>姓名：{item.name}</li>
                                <li>年龄：{item.age}</li>
                            </ul>
                        )

                    })
                }
            </div>
        )
    }
}