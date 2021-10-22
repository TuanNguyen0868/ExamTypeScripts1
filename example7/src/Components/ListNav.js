import React from 'react'
  
export default function ListNav(props) {
  return (
  <>
    <li class="nav-item">
      <a class="sub-item" href={props.linkss}>{props.navname}</a>
    </li>
  </>
  )
}

