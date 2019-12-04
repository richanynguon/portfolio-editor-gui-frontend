import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP } from '../../modules/users/users.queries'


const Register = () => {
  const [signup, { data }] = useMutation(SIGNUP)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (data) {
      setMessage(data.signup[0].message)
    }
  }, [data])

  return (
    <Formik
      initialValues={{ user_name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        user_name: Yup.string()
          .min(1, 'Must be 1 characters or more')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
        email: Yup.string()
          .lowercase()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        signup({ variables: values })
        setSubmitting(false);
        resetForm();

      }}
    >
      <Form>
        <s.Label>
          Username:
       <Field name="user_name" placeholder='username'/>
          <ErrorMessage name='user_name' />
        </s.Label>
        <s.Label>
          Email:
       <Field name="email" placeholder='email'/>
          <ErrorMessage name='email' />
        </s.Label>
        <s.Label>
          Password:
       <Field name="password" placeholder='password'/>
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
export default Register;



