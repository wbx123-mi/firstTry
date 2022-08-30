import React from 'react'
import "./index.css"

export default function Modal(props) {
    let defaultProps = {
        bg:'gray'
    }
    let data = Object.assign({},defaultProps,props)
  return (
    <div className='modal' onClick={e => {
        if(e.target.className === 'modal'){
                data.click()
            }
    }} style={{
        background:data.bg
    }}>
       <div className="modal-center">
           {data.children}
       </div>
    </div>
  )
}
