import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Provider } from './ctx';

export default class Form extends Component {
    static propsType={  //校验 参数 必传 函数
        submit:PropTypes.func.isRequired
    }
    state={
        formData:{},
        handleInputChange:(name,value)=>{ //input change事件
            this.setState({  //每次input值发生改变  都将重新setstate
                formData:{
                    ...this.state.formData,
                    [name]:value //用后面的name 覆盖 前面formData里面对应的name value
                }
            })
        },
        submit:()=>{// 提交按钮事件
            this.props.submit(this.state.formData);
            // 点击input组件里面的click 调用上下文里面的sumit事件  触发form组件接收的props里面的函数
        }
    }
    componentDidMount(){
        if(this.props.onRef !== undefined){
            this.props.onRef(this)//通过props 传过来的函数 将子组件的this传递给父组件 之后父组件就可以通过这个来调用子组件的方法
        }
    }
    sonMethods=()=>{
        console.log('ddd')
    }
  render() {
    return (
      <Provider value={this.state}>
         <div>
            {/* 类似于vue的插槽 test里Form组件里面嵌套的内容都可以通过children拿到 */}
            {this.props.children }
        </div>
      </Provider>
    )
  }
}
