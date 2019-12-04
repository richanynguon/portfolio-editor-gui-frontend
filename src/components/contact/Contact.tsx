import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { CONTACT_POST } from '../../modules/users/users.queries'



const Contact = () => {
  const [contact, { data }] = useMutation(CONTACT_POST)
  const [message, setMessage] = useState("")


  useEffect(() => {
    if (data) {
      setMessage(data.sendBalooEmail[0].message)
    }
  }, [data])

  return (
    <Formik
      initialValues={{ message: '', name: '', email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .lowercase()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        contact({ variables: values })
        setSubmitting(false);
        resetForm();

      }}
    >
      <Form>
        <s.Label>
          Email:
       <Field name="email" placeholder='Email' />
          <ErrorMessage name='email' />
        </s.Label>
        <s.Label>
          Name (Optional):
       <Field name="name" placeholder='Name ' />
          <ErrorMessage name='name' />
        </s.Label>
        <s.Label>
          Message (Optional):
       <Field name="message" placeholder='Message' />
          <ErrorMessage name='message' />
        </s.Label>
        <button type="submit">
          Submit
       </button>
        {message}
      </Form>

    </Formik>
  );
}
export default Contact;



