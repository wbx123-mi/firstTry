import React, { Component } from 'react'
import PropsTypes from "prop-types";
import ctx from "./ctx"
export default class FormInput extends Component {
    static defaultProps = { //可以默认参数
        type:"text"
    }
    static contextType = ctx;//使用上下文内属性前 需要先定义
    static propTypes={
        name:PropsTypes.string.isRequired, //校验 参数 字符串 必传
        type:PropsTypes.string.isRequired
    }
  render() {
    const {name,type} = this.props 
    return (
      <div>
        <input name={name} type={type} 
        value={this.context.formData[name]|| ""} //因为一开始value为undefined 为不受控组件 不能直接从不受控变为 受控 所以需要给他一个“”
        onChange={e=>{this.context.handleInputChange(name,e.target.value)}}></input>
      </div>
    )
  }
}
