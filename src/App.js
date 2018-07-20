import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Component/Home'
import Trag from './Component/Trag'
import Thermo from './Component/Thermo'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">飞行图</Link>
            </li>
            <li>
              <Link to="/traj">行走轨迹</Link>
            </li>
            <li>
              <Link to="/thermo">热力图</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/traj" component={Trag} />
          <Route path="/thermo" component={Thermo} />
        </div>
      </Router>
    )
  }
}



export default App;
