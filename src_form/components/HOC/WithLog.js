import React from 'react'
//高阶组件
export default function WithLog(Comp) {
  return class LogWrapper extends React.Component{
    componentDidMount(){
        console.log(Comp.state)
    }
    render(){
        console.log(this.props)
        return <Comp {...this.props}>dada</Comp>
    }
  }
}

