import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {


  return (
    <header>
      <NavLink to='/bio'>Bio</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/welcome'>&#x2B21;</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/sudo'>Sudo</NavLink>
    </header>
  )
}
