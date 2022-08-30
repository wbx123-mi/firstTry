
import ThreeLayout from './components/ThreeLayout'
import React, { Component } from 'react'


 class A extends Component {
     handle =()=>{
         console.log('A')
       
     }
  render() {
    return (
      <div onClick={this.props.onClick}> 
        adadada
      </div>
    )
  }
}


export default class App extends Component {
    
    handle=()=>{
        console.log(this)
    }
    handleClick = () =>{
        console.log(this.test)
        this.setState({})
    }
    componentDidMount(){
        console.log(this.test)
    }
  render() {
    return (
      <div>
          <div  onClick={this.handleClick}>ddd</div>
           <ThreeLayout  gap={100} on={this.handle}>
            主区域
        </ThreeLayout>
        <A ref={el=>{
            console.log(el)
              console.log('did')
              this.test = el
          }} onClick = {this.handleClick}></A>
      </div>
    )
  }
}
