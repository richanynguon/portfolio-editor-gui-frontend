import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../../styles/styles'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_PROJECT } from '../../modules/projects/projects.queries';


const ProjectForm = () => {
  const [createProject, { data }] = useMutation(CREATE_PROJECT)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (data) {
      setMessage(data.signup[0].message)
    }
  }, [data])

  return (
    <Formik
      initialValues={{
        title: '',
        project_focus: '',
        project_github: '',
        project_photo: '',
        project_stack: '',

      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Required'),
        project_focus: Yup.string()
          .required('Required'),
        project_photo: Yup.string()
          .url('Invalid url')
          .required('Required'),
        project_stack: Yup.string()
          .required('Required'),
        project_github: Yup.string()
          .url('Invalid url')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        createProject({ variables: values })
        setSubmitting(false);
        resetForm();

      }}
    >
      <Form>
        <s.Label>
          Title:
       <Field placeholder="Title" name="title" />
          <ErrorMessage name='title' />
        </s.Label>
        <s.Label>
          Project Focus:
       <Field placeholder="Project Focus" name="project_focus" />
          <ErrorMessage name='project_focus' />
        </s.Label>
        <s.Label>
          Project Photo:
       <Field placeholder="Project Photo" name="project_photo" />
          <ErrorMessage name='project_photo' />
        </s.Label>
        <s.Label>
         Project Stack:
       <Field placeholder="Project Stack" name="project_stack" />
          <ErrorMessage name='project_stack' />
        </s.Label>
        <s.Label>
          Project Github:
       <Field placeholder="Project Github" name="project_github" />
          <ErrorMessage name='project_github' />
        </s.Label>
        <button type="submit">
          Submit
       </button>
        {message}
      </Form>

    </Formik>
  );
}
export default ProjectForm;



