import React from 'react'
import "./index.css"
export default function ThreeLayout(props) {
    let defaultProps = {
        leftWidth:200,
        rightWidth:200,
        minWidth:1000,
        gap:50
    }
   
    let data = Object.assign({},defaultProps,props)
    console.log(this)
  return (
    <div className="container" style={{
        minWidth:data.minWidth
    }}>
        <div className="main">
            {data.children}
        </div>
        <div className="left" style={{
            width:data.leftWidth,
            marginRight:data.gap
        }}></div>
        <div className="right" style={{
            width:data.rightWidth,
            marginLeft:data.gap
        }}></div>
        
    </div>
  )
}
