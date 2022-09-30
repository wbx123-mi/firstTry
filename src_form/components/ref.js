
// import ThreeLayout from './components/ThreeLayout'
import React, { Component } from 'react'


//  class A extends Component {
//      handle =()=>{
//          console.log('A')
       
//      }
//   render() {
//     return (
//       <div onClick={this.props.onClick}> 
//         adadada
//       </div>
//     )
//   }
// }


export default class Ref extends Component {
     aaa=1;
     createRef = React.createRef()
    handle=()=>{
        console.log(this)
    }
    handleClick = () =>{
      console.log(this)
      console.log(this.refs.input1)
      console.log(this.createRef.current)//createRef Api类Ref 该api创建一个容器 存储被ref标识的节点，该容器专人专用 一个标签对应一个
        console.log(this.input)
        this.setState({})
    }
    handleRef=(c)=>{ //回调函数类Ref  如果写在内联 数据更新时回调用两次 不过影响不大
      this.input = c 
      console.log('@dadads',c)

    }
    handleTest=()=>{
        var a = 0;
        console.log(a)
        return function(){
            console.log(a)
            a++
        }
    }
    // componentDidMount(){
    //     console.log(this.test)
    // }
  render() {
    console.log(this.aaa)
    return (
      <div>
        <div onClick={this.handleTest()}>闭包</div>
           <input ref="input1" />
           <input ref={this.handleRef} />
           <input ref={this.createRef}></input>
           <button onClick={this.handleClick}>点大大大大大大击</button>
          <div  onClick={this.handleClick}>ddd</div>
           {/* <ThreeLayout  gap={100} on={this.handle}>
            主区域
        </ThreeLayout> */}
        {/* <A ref={el=>{
            console.log(el)
              console.log('did')
              this.test = el
          }} onClick = {this.handleClick}></A> */}
      </div>
    )
  }
}
