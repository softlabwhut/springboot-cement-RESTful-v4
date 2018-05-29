import React, { Component } from 'react';
import './Ibody_survey.css'

export default class Ibody_survey extends Component {
  constructor(props){
    super(props);
    this.state = {
      showColor: "white",
      showWrite: "none"
    }
  }
  onChangeColor(){
    this.setState({
      showColor: "green",
      showWrite: "block"
    })
  }
  onChangeColorToo(){
    this.setState({
      showColor: "white",
      showWrite: "none"
    })
  }
  render(){
    return (
      <div id="survey">
        <div className="container">
          <hr />
          <h3>我国水泥工业环境状况调查</h3>
          <hr />
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="iconbox col-md-2 col-sm-2" style={{background:this.state.showColor}}>
                <span className="fa fa-gear fa-3x" onMouseOver={() => {this.onChangeColor()}} onMouseOut={() => {this.onChangeColorToo()}}></span><br /><br />
                <div style={{display:this.state.showWrite}}>
                  <h3>设置</h3>
                  <h3>13</h3>
                </div>
            </div>
            <div className="iconbox col-md-2 col-sm-2" style={{background:this.state.showColor}}>
                <span className="fa fa-user fa-3x" onMouseOver={() => {this.onChangeColor()}} onMouseOut={() => {this.onChangeColorToo()}}></span><br /><br />
                <div style={{display:this.state.showWrite}}>
                  <h3>客户</h3>
                  <h3>97</h3>
                </div>
            </div>
            <div className="iconbox col-md-2 col-sm-2" style={{background:this.state.showColor}}>
                <span className="fa fa-suitcase fa-3x" onMouseOver={() => {this.onChangeColor()}} onMouseOut={() => {this.onChangeColorToo()}}></span><br /><br />
                <div style={{display:this.state.showWrite}}>
                  <h3>项目</h3>
                  <h3>8</h3>
                </div>
            </div>
            <div className="iconbox col-md-2 col-sm-2" style={{background:this.state.showColor}}>
                <span className="fa fa-clock-o fa-3x" onMouseOver={() => {this.onChangeColor()}} onMouseOut={() => {this.onChangeColorToo()}}></span><br /><br />
                <div style={{display:this.state.showWrite}}>
                  <h3>时间</h3>
                  <h3>2018</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

