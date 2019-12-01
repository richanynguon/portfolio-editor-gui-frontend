import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuth(false)
    } else {
      setIsAuth(true)
    }
  }, [])

  return (
    <header>
      <NavLink to='/bio'>Bio</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/welcome'>&#x2B21;</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/login'>Admin</NavLink>

    </header>
  )
}
