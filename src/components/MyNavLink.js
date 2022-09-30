import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
  return (
    <div>
      <NavLink activeClassName='demo' to={props.to} style={{display:'block'}}>{props.children}</NavLink>
    </div>
  )
}
