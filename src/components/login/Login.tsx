import React, { useEffect, useContext, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../../modules/users/users.queries'
import { UserContext } from '../../modules/users/users.context';
import { useHistory } from 'react-router';



const Login = () => {
  const [login, { data }] = useMutation(LOGIN)
  const { setState } = useContext(UserContext)
  const [message, setMessage] = useState("")
  const history = useHistory();

  useEffect(() => {
    if (data) {
      if (data.login[0].message === "creator") {
        setState(data.login[0].message)
        localStorage.setItem('a', data.login[0].path)
        history.push('/admin')
      } else {
        setMessage(data.login[0].message)
      }
    }

  }, [data, setState, history])

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
        email: Yup.string()
          .lowercase()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        login({ variables: values })
        setSubmitting(false);
        resetForm();

      }}
    >
      <Form>

        <s.Label>
          Email:
       <Field placeholder="email" name="email" />
          <ErrorMessage name='email' />
        </s.Label>
        <s.Label>
          Password:
       <Field placeholder="password" name="password" />
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



