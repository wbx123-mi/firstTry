import React, { Component } from 'react'
import Form from "./Form.js";
import FormInput from './FormInput.js';
import FormButton from './FormButton.js';

Form.Input = FormInput;
Form.Button = FormButton;//将 引入的组件重命名
export default class test extends Component {

  onRef=(ref)=>{ //父组件页面定义绑定方法onRef():
    console.log(ref)
    console.log(this)
    this.child = ref
  }
  handleClick=()=>{
    this.child.sonMethods()
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>父组件调用子组件方法</button>
        <Form submit={(data)=>{
            console.log(this)
            console.log(data)
        }} onRef={this.onRef}>
            {/* 通过prop传递给子组件 */}
            <div>
            <Form.Input name="username" type="text"></Form.Input>
            <Form.Input name="pwd" type="password"></Form.Input>
            </div>
            <Form.Button>提交</Form.Button>
        </Form>
      </div>
    )
  }
}
