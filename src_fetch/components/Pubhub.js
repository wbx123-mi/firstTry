import React, { Component } from 'react'
import PubSub from 'pubsub-js'
//订阅消息模式
export default class Pubhub extends Component {
    state={
        message:''
    }
    componentDidMount(){
        PubSub.subscribe('getmessage',(_,data)=>{ //接收订阅消息
            console.log(data)
            this.setState({message:data})
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe('getmessage ')
    }
  render() {
    return (
      <div>
       
      </div>
    )
  }
}
