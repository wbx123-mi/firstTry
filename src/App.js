
import { hot } from 'react-hot-loader/root';
import {Route,Switch} from "react-router-dom"
// import {nanoid} from "nanoid" 
import React, { Component } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import MyNavLink from './components/MyNavLink';
import Play from './components/Play';
class App extends Component{
    render(){
      
        return <div>
            <div style={{display:'flex'}}>
                <div style={{width:100,marginRight:100}}>
                    <MyNavLink  to="/about" >About</MyNavLink >
                    <MyNavLink  to="/home" >Home</MyNavLink >
                </div>
                <div style={{width:500}}>
                    <Play></Play>
                    {/* 用switch包裹组件 在每个path匹配到第一个满足条件的组件后就不再往下匹配了 */}
                    <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                    </Switch>
                </div>
            </div>
        </div>
        
    }
}
export default hot(App)