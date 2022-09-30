import React, { Component } from 'react'

export default class Comp extends Component {
  state={
    name:'wbx'
  }
  render() {
    return (
      <div>
        Comp
        {this.props.children}
      </div>
    )
  }
}

