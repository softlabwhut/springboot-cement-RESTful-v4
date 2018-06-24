import React, { Component } from 'react';
import './Ibody_hero.css'


export default class Ibody_hero extends Component {
  constructor(props){
    super(props);
    this.state = {
      nowing: 1,
      intro: ["大型企业皇马水泥厂",
      "宁国水泥厂10月份产销发电“三驾齐驱”创佳绩",
      "白马山水泥厂超前谋划雨季、高温安全生产防范工作",
      "防城港公司承接的缅甸MCL水泥厂钢结构项目顺利完工",
      "唐山1889，中国第一桶水泥在这里诞生"]
    }
  }
  onChangeLeft(){
    this.setState({
      nowing: this.state.nowing>1 ? this.state.nowing-1 : 5
    })
  }
  onChangeRight(){
    this.setState({
      nowing: this.state.nowing<5 ? this.state.nowing+1 : 1
    })
  }
  render(){
    return (
      <div id="hero">
        <div className="container" style={{height:630}}>
          <div className="pictures" >
            <img src={require("../img/body/slider0"+this.state.nowing+".jpg")}  />
            <h1>{this.state.intro[this.state.nowing-1]}</h1>
            <div className="button">
              <span className="leftbut" onClick={() => {this.onChangeLeft()}}></span>
              <span className="rightbut" onClick={() => {this.onChangeRight()}}></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
