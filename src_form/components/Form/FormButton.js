import React, { Component } from 'react'
import ctx from './ctx'
export default class FormButton extends Component {
    static contextType = ctx;
  render() {
    return (
      <div>
        <button onClick={this.context.submit}>
            {/* 类似于插槽 test里 button组件内嵌套的东西 可以通过children拿到 */}
            {this.props.children}
        </button>
      </div>
    )
  }
}
