import  React, { Component } from 'react';

import Header from '../routes/Header'
import Footer from '../routes/Footer'

import Home from '../routes/Home'

/**** 功能里面的组件 ****/

import FHouse from '../routes/FHouse'
import Heatmap from '../routes/heatmap';
import MapImage from '../routes/map-image';
import FModel from '../routes/FModel'
import FTraj from '../routes/FTraj'
import FAir from '../routes/FAir'

import BuildModuleUrl from 'cesium/Core/buildModuleUrl';
import './App.css';
import 'cesium/Widgets/widgets.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

BuildModuleUrl.setBaseUrl('./');

class SAP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      funControl: false,
      otherControl: false
    };
  } 
  handleClick(){
    this.setState({
      funControl: false,
      otherControl: false
    })
  }
  handleFunClick() {
    this.setState({
      funControl: !this.state.funControl,
      otherControl: false
    });
  }
  handleOtherClick(){
    this.setState({
      otherControl: !this.state.otherControl,
      funControl: false
    });
  }
  render() {
    let funCls = 'dropdown-content';
    let otherCls = 'dropdown-content';

    let dropbtn1 = 'dropbtn dropbtnshow';
    let dropbtn2 = 'dropbtn';
    let dropbtn3 = 'dropbtn';

    if(this.state.funControl){
      dropbtn1 = 'dropbtn';
      dropbtn3 = 'dropbtn';
      dropbtn2 += ' dropbtnshow';
      funCls += ' funStyle';
      otherCls = 'dropdown-content';
    }
    if(this.state.otherControl){
      dropbtn1 = 'dropbtn';
      dropbtn2 = 'dropbtn';
      dropbtn3 += ' dropbtnshow';
      otherCls += ' otherStyle';
      funCls = 'dropdown-content';
    }
    return (
      <div id="box" >
        <Router>
          <div>
            <div id="box-left">
              <ul>
                <li className="dropdown">
                  <Link to="/" className={dropbtn1} onClick={this.handleClick.bind(this)}>首页</Link>
                </li>
                <li>
                  <Link to="/func/" className={dropbtn2} onClick={this.handleFunClick.bind(this)}>功能</Link>
                  <ul className={funCls}>
                    <li className="a"><Link to='/func/'>楼宇</Link></li>
                    <li className="a"><Link to='/func/thermo'>热力图</Link></li>
                    <li className="a"><Link to='/func/global'>3D球形图</Link></li>
                    <li className="a"><Link to='/func/model'>3D模型</Link></li>
                    <li className="a"><Link to='/func/traj'>人员轨迹的控制</Link></li>
                    <li className="a"><Link to='/func/air'>飞机轨迹的还原</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/others/" className={dropbtn3} onClick={this.handleOtherClick.bind(this)}>其他</Link>   
                  <ul className={otherCls}>
                    <li className="a"><Link to='/others/'>使用说明</Link></li>
                    <li className="a"><Link to='/others/others2'>版本维护</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id='box-right'>
              <Route exact path="/" component={Home} />

              <Route exact path="/func/" component={FHouse} />
              <Route path='/func/thermo' component={Heatmap} />
              <Route path='/func/global' component={MapImage} />
              <Route path='/func/model' component={FModel} />
              <Route path='/func/traj' component={FTraj} />
              <Route path='/func/air' component={FAir} />

              <Route exact path='/others/' component={MapImage} />
              <Route path='/others/others2' component={MapImage} />
            </div>            
          </div>
        </Router>
      </div>
    );
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

export default App;