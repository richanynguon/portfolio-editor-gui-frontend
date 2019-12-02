import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, ErrorMessage, Form, Field } from 'formik';
import * as s from '../../styles/styles'


interface FormValues {
  user_name: string;
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { isSubmitting } = props;
  return (
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
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};



const RegisterForm = withFormik<{}, FormValues>({

  mapPropsToValues: () => {
    return {
      user_name: '',
      email: '',
      password: '',
    };
  },

  validationSchema: Yup.object().shape({
    user_name: Yup.string()
      .min(5, "Username must be 5 characters or longer")
      .required("Username is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
  }),

  handleSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {

  },
})(InnerForm);


const Register = () => (
  <div>
    Register
    <RegisterForm />
  </div>
);

export default Register;