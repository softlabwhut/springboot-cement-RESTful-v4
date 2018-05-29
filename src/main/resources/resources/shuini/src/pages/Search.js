import React, { Component } from 'react';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({
            term:event.target.value
        })
    }
    onFormSubmit(event){
        event.preventDefault();

        this.setState({
            term:''
        })

    }
    render(){
        return(
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input className="form-control"
                       placeholder="请输入........"
                       onChange={this.onInputChange}
                       value={this.state.term}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">查询</button>
                </span>
            </form>
        )
    }
}