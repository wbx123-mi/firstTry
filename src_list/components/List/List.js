import React, { Component } from 'react'
import PropTypes from "prop-types"

import Item from "../Item/Item"
export default class List extends Component {
  static propTypes={
    handleChangeStatus:PropTypes.func.isRequired, //参数类型限制  参数为函数 且 必传
    handleDelete:PropTypes.func.isRequired,
    list:PropTypes.array.isRequired
  } 

  render() {
    const {list,handleChangeStatus,handleDelete} = this.props

    return (
      <ul>
        {list.map((item)=>{
          return <Item key={item.id } {...item} handleChangeStatus={handleChangeStatus} handleDelete={handleDelete}></Item>
        })}
      </ul>
    )
  }
}
