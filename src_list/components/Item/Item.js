import React, { Component } from 'react'
// import PropTypes from "prop-types"

export default class Item extends Component {
  
  state={
    isShow:false //是否显示删除按钮  移入移出
  }
  handleEnter=(e)=>{
    return ()=>{
      this.setState({
        isShow:e
      })
    }
  }
  handleLeave=(e )=>{
    return ()=>{
      this.setState({
        isShow:e
      })
    } 
  }
  handleCheck=(id)=>{
    return (event)=>{//传回id 和 状态
      this.props.handleChangeStatus(id,event.target.checked)
    }
  }
  render() {
    const {id,checked,message,handleDelete} = this.props
    return ( 
      <li onMouseEnter={this.handleEnter(true)} onMouseLeave={this.handleLeave(false)} style={{height:30,marginBottom:10,backgroundColor:this.state.isShow?'#ddd':'white'}}>
        <input type="checkbox" checked={checked} onChange={this.handleCheck(id)}></input>
        {/* 用checked绑定是否选择后不可更改 需要用default */}
        <span>{message}</span>
        {this.state.isShow?<button style={{marginLeft:30}} onClick={()=>handleDelete(id)}>删除</button>:null}
      </li>
    )
  }
}
