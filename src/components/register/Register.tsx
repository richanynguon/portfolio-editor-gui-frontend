import React, { useState } from 'react'
import { formChange, formSubmit } from '../../utils/formHelper'


const Register: React.FC = () => {

  const [registerForm, setregisterForm] = useState({
    email: '',
    user_name: '',
    password: '',
  })

  const onChange = (e:React.ChangeEvent, setState:) => {
    setregisterForm({
      [e.target.name]: e.target.value,
      ...registerForm
    })
  }

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Username'
          required
          name=
          onChange={onChange}
        />

      </form>
    </div>
  )
}

export default Register;
