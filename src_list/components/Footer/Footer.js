import React, { Component } from 'react'
// import prooTypes from "prop-types"

export default class Footer extends Component {
  handleCheckedAll=(e)=>{
      this.props.handleClick(e.target.checked)//列表的选中状态 和 全选按钮保持一致
  }
  render() {
    const {finished,total,handleDeleteAll} = this.props
    return (
      <div>
        <input type="checkbox" checked={(total===finished && total!==0) ? true : false} onChange={this.handleCheckedAll}></input>
        <span>{'已完成 '+finished+'/总数'+total}</span>
        <button onClick={handleDeleteAll}>清除已 完成任务</button>
      </div>
    )
  }
}
