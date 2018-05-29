import React, { Component } from 'react';
import './News_list.css';

export default class Regis_ques extends Component{
	
	render(){
		return(
			<div id="news_list">
        <div className="col-md-12 col-sm-12">
          <h2 >登记模板</h2>
          <h4 >您可以登记已经发放问卷的工厂信息。</h4>
          <h6 style={{"font-weight": 'bold'}}>登记已发问卷厂家</h6>
          <form role="form" className="form">
            <div className="form_style row">
              <span className="col-md-2 col-sm-2">区域：</span>
              <select id="area" className="form_choose">
                <option value="-1">请选择</option>
                <option value="0">华北地区京津冀蒙晋</option>
                <option value="1">东北地区黑吉辽</option>
                <option value="2">华东地区沪皖闽苏赣鲁浙</option>
                <option value="5">西北地区陇宁青陕新</option>
                <option value="4">西南地区渝川黔藏云</option>
                <option value="3">中南地区粤桂琼豫鄂湘</option>
              </select>
              <span title="请选择">请选择</span>
            </div>
            <div className="form_style row">
              <span className="col-md-2 col-sm-2">省份：</span> 
              <select id="province" className="form_choose">
                <option value="-1">请选择</option>
                <option>北京</option>
                <option>天津</option>
                <option>河北</option>
                <option>山西</option>
                <option>内蒙古</option>
                <option>辽宁</option>
                <option>吉林</option>
                <option>黑龙江</option>
                <option>上海</option>
                <option>江苏</option>
                <option>浙江</option>
                <option>安徽</option>
                <option>福建</option>
                <option>江西</option>
                <option>山东</option>
                <option>河南</option>
                <option>湖北</option>
                <option>湖南</option>
                <option>广东</option>
                <option>广西</option>
                <option>海南</option>
                <option>重庆</option>
                <option>四川</option>
                <option>贵州</option>
                <option>云南</option>
                <option>西藏</option>
                <option>陕西</option>
                <option>甘肃</option>
                <option>青海</option>
                <option>宁夏</option>
                <option>新疆</option>
                <option>香港</option>
                <option>澳门</option>
              </select>
              <span title="请选择">请选择</span>
            </div>
            <div className="form_style row">
              <span className="col-md-2 col-sm-2">市区：</span>
              <select id="city" className="form_choose">
                <option value="-1">请选择</option>
                
              </select>
              <span title="请选择">请选择</span>
            </div>
            <div className="form_style row">
              <span className="col-md-2 col-sm-2">水泥厂：</span>
              <select id="plant" className="form_choose">
                <option value="-1">请选择</option>
              </select>
              <span title="请选择">请选择</span>
            </div>
            <div className="form_style row">
              <span className="col-md-2 col-sm-2">问卷版本：</span>
              <select id="version" className="form_choose">
                <option value="-1"> 请选择</option>
                <option value="0">2018水泥模板</option>
              </select>
              <span title="请选择">请选择</span>
            </div>
            <input className="btn btn-primary form_style" id="submit" value="提交" type="submit" />
          </form>
        </div>
      </div>
		)
	}
}