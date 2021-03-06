import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../styles/styles'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { EDIT_PROFILE, GET_PROFILE } from '../modules/profile/profile.queries';



const ProfileForm = (props: any) => {
  const { data } = useQuery(GET_PROFILE, {
    variables: {
      id: props.match.params.id,
    }
  })
  const [editProfile] = useMutation(EDIT_PROFILE)
  const [message, setMessage] = useState("")
  const [profile, setProfile] = useState({
    id: props.match.params.id,
    bio: '',
    location: '',
    github: '',
    twitter: '',
    linkedin: '',
    stack: '',
    learning: '',
    involved: '',
  })

  useEffect(() => {
    if (data) {
      setProfile(data.editProfile[0].message)
    }
  }, [data])

  return (
    <Formik
      initialValues={{
        id: profile.id,
        bio: profile.bio,
        location: profile.location,
        github: profile.github,
        twitter: profile.twitter,
        linkedin: profile.linkedin,
        stack: profile.stack,
        learning: profile.learning,
        involved: profile.involved,
      }}
      validationSchema={Yup.object({
        bio: Yup.string()
          .required('Required'),
        location: Yup.string()
          .required('Required'),
        github: Yup.string()
          .url('Invalid url')
          .required('Required'),
        twitter: Yup.string()
          .url('Invalid url')
          .required('Required'),
        linkedin: Yup.string()
          .url('Invalid url')
          .required('Required'),
        stack: Yup.string()
          .required('Required'),
        learning: Yup.string()
          .required('Required'),
        involved: Yup.string()
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        editProfile({ variables: values })
        setSubmitting(false);
        resetForm();

      }}
    >
      <Form>
        <s.Label>
          Bio:
       <Field placeholder="Bio" name="bio" />
          <ErrorMessage name='bio' />
        </s.Label>
        <s.Label>
          Location:
       <Field placeholder="Location" name="location" />
          <ErrorMessage name='location' />
        </s.Label>
        <s.Label>
          Github:
       <Field placeholder="Github" name="github" />
          <ErrorMessage name='github' />
        </s.Label>
        <s.Label>
          Twitter:
       <Field placeholder="Twitter" name="twitter" />
          <ErrorMessage name='twitter' />
        </s.Label>
        <s.Label>
          Linkedin:
       <Field placeholder="Linkedin" name="linkedin" />
          <ErrorMessage name='linkedin' />
        </s.Label>
        <s.Label>
          Stack:
       <Field placeholder="Stack" name="stack" />
          <ErrorMessage name='stack' />
        </s.Label>
        <s.Label>
          Learning:
       <Field placeholder="Learning" name="learning" />
          <ErrorMessage name='learning' />
        </s.Label>
        <s.Label>
          Involved:
       <Field placeholder="Involved" name="involved" />
          <ErrorMessage name='involved' />
        </s.Label>
        <button type="submit">
          Submit
       </button>
       {message}
      </Form>

    </Formik>
  );
}
export default ProfileForm;



