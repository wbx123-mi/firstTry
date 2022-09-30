
import { hot } from 'react-hot-loader/root';
import {nanoid} from "nanoid" 
import React, { Component } from 'react'
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Footer from "./components/Footer/Footer"


class App extends Component{
    state={
        items:[{id:nanoid(),checked:false,message:'吃饭'},
        {id:nanoid(),checked:false,message:'睡觉'},
        {id:nanoid(),checked:false,message:'打豆豆'},
        {id:nanoid(),checked:false,message:'pc'},]
    }
    handleUp=(currentMessage)=>{
        console.log(currentMessage )
        this.setState({
            items:[{
                id:nanoid(),
                checked:false,
                message:currentMessage
            },...this.state.items]
        })
        console.log(this.state.items)
    }
    footHandle=(checked)=>{
        const {items} = this.state;
        const newArr = items.map((item)=>({...item,checked:checked}))
        this.setState({
            items:newArr
        })
    }
    handleDeleteAll=()=>{ //删除已完成
       let newArr = this.state.items.filter((item)=>!item.checked)
       console.log(newArr)
       this.setState({
        items:newArr
       })
    }
    handleDeleteOne=(id)=>{//删除某一项 按id删除
        const {items} = this.state;
        const newArr = items.filter((item)=>item.id !== id);
        this.setState({
            items:newArr
        })
    }
    handleChangeStatus=(id,status)=>{
        const {items} = this.state;
        const newItems = items.map((item)=>{
            if(item.id===id){//如果id匹配  更改此项的checked  下面的写法 后方属性覆盖前面同名属性
                return {...item,checked:status}
            }else{
                return item
            }
        })
        this.setState({
            items:newItems
        })
    }
    render(){
        let finished=this.state.items.reduce((pre,cur)=>pre+(cur.checked?1:0),0)
        let total = this.state.items.length
        return <div>
            <Header handleClick={this.handleUp}></Header>
            <List list={this.state.items} handleChangeStatus={this.handleChangeStatus} handleDelete={this.handleDeleteOne}></List>
            <Footer finished={finished} total={total} handleClick={this.footHandle} handleDeleteAll={this.handleDeleteAll}></Footer>
        </div>
    }
}
export default hot(App)