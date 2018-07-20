import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import './App.css';

import Header from './Component/Header'
import Home from './Component/Home'
import Trag from './Component/Trag'
import Thermo from './Component/Thermo'
import Footer from './Component/Footer'

class SAP extends Component {
  constructor(props) {
      super(props);
      this.state = {DIS: false};
      this.handleClick =this.handleClick.bind(this);
  }
  handleClick() {
        this.setState({display:this.state.display==="block"?"none":"block"
        });
    }
  render(){
      return(<div id="box" >
        <Router>
          <div>
            <div id="box-left">
              <ul>
                <li>
                  <Link to="/">首页</Link>
                </li>
                <li>
                  <Link to="/traj" onClick={this.handleClick.bind(this)}>功能</Link>
                    <div id={"sp"}   style={{display:this.state.display}}>
                      <span className="span">楼宇图</span>
                      <span className="span">热力图</span>
                      <span className="span">3D球型图</span>
                      <span className="span">人员行走路径</span>
                    </div>
                </li>
                <li>
                  <Link to="/thermo" onClick={this.handleClick.bind(this)}>其他</Link>   
                  <div  style={{display:this.state.display==="none"?"block":"none"}}>
                    <span className="span">使用说明</span>
                    <span className="span">版本维护</span>
                  </div>
                </li>
              </ul>
            </div>
            <div id="box-middle">
              <img src={logo} className="big-logo" alt="logo" />
              <div id="box-middle-right">
                <button className="login" onClick={this.handleClick}>注册</button>
                <button className="login" onClick={this.handleClick}>登陆</button>
              </div>
              <div id={"shuru"}>
                   用户名：<input type={"text"}/>
                  <br/>
                   密  码：<input type={"text"}/>
                  <br/>
                  <button onClick={this.handleClick} >提交</button>
              </div>
              <Route exact path="/" component={Home} />
              <Route path="/traj" component={Trag} />
              <Route path="/thermo" component={Thermo} ></Route>
             
            </div>        
          </div>
        </Router>
        <div id="box-right">
            <p className="text">项目简介:</p>
            <p className="text">本项目自2018年7月9日起实施，项目组成员通过多方面调研，最终确定利用支持3D技术gis开源前端框架CesiumJS实现，主要完成的功能包括：3D可视化模型、楼宇模型、热力图</p>
        </div>
      </div>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
           <SAP id={"SAP"}/>
          <Footer />
      </div>
    );
  }
}


export default App