import React, { Component } from 'react'
import PropTypes from "prop-types"



export default class Header extends Component {
  static propTypes={
    handleClick:PropTypes.func.isRequired  //参数类型限制  参数为函数 且 必传
  }
  handleKeyUp=(event)=>{
    if(event.keyCode===13){
      console.log(event.target.value.trim)
      if(event.target.value.trim()===''){
        alert('输入不能为空')
      }else{
        this.props.handleClick(event.target.value)
        event.target.value=''
      }
    }else{
      return
    }
  }
  render() {
    return (
      <div>
        <input placeholder='回车添加事件' onKeyUp={this.handleKeyUp}></input>
      </div>
    )
  }
}
