import React, { Component } from 'react'
import axios from "axios"
export default class ProxyTest extends Component {
  getData=()=>{
    axios.get('http://localhost:3000/api/students').then(res=>{
      console.log(res.data)
    },error=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>获取数据</button>
      </div>
    )
  }
}
