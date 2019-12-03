import React, { useEffect, useContext, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../../modules/users/users.queries'
import { UserContext } from '../../modules/users/users.context';



const Login = () => {
  const [login, { data }] = useMutation(LOGIN)
  const { setState } = useContext(UserContext)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (data) {
      if (data.login[0]) {
        setMessage(data.login[0].message)
      }
    }

  }, [data, setState])

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) => {
        login({ variables: values })


      }}
    >
      <Form>
       
        <s.Label>
          Email:
       <Field type="email" name="email" />
          <ErrorMessage name='email' />
        </s.Label>
        <s.Label>
          Password:
       <Field type="password" name="password" />
          <ErrorMessage name='password' />
        </s.Label>
        <button type="submit">
          Submit
       </button>
       {message}
      </Form>
      
    </Formik>
  );
}
export default Login;



