import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => (
  <div id="menu-bar">
    <h6><Link to="/">Portfolio</Link></h6>
    <h6><Link to="/aboutme">About Me</Link></h6>
    {/* <h6><Link to="/contact">Contact</Link></h6> */}
  </div>
)

export default MenuBar
