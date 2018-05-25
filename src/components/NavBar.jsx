import React from 'react'
import { Link } from 'react-router-dom'
import { MenuBar } from '../components'

const NavBar = () => (
  <div id="nav-bar">
    <h1><Link to="/">Julia Cassara</Link></h1>
    <MenuBar />
  </div>
)

export default NavBar
