import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP } from '../../modules/users/users.queries'


const Register = () => {
  const [signup] = useMutation(SIGNUP)
  return (
    <Formik
      initialValues={{ user_name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        user_name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
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
       <Field type="name" name="user_name" />
          <ErrorMessage name='name' />
        </s.Label>
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
      </Form>
    </Formik>
  );
}
export default Register;



