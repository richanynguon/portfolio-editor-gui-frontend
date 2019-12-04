import React from 'react';
import Register from '../register/Register';
import Login from '../login/Login';


export default function AdminTab() {
  return (
    <div>
      <Register />
      <Login/>
      <a href="http://localhost:3000/admin">&#x2B21;</a>
    </div>
  )
}
