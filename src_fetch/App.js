
import { hot } from 'react-hot-loader/root';
// import {nanoid} from "nanoid" 
import React, { Component } from 'react'
// import ProxyTest from './components/ProxyTest';
import StateHook from './components/StateHook';
import PubSub from "./components/Pubhub"
class App extends Component{
    render(){
      
        return <div>
        <StateHook></StateHook>
        <PubSub></PubSub>
        </div>
    }
}
export default hot(App)