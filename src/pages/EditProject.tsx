import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as s from '../styles/styles'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { EDIT_PROJECT } from '../modules/projects/projects.queries';
import { GET_PROFILE } from '../modules/profile/profile.queries';


const ProjectForm = (props: any) => {
  const { data } = useQuery(GET_PROFILE, 
    {
      variables: {
        id: props.match.params.id,
      }
    })
  const [editProject] = useMutation(EDIT_PROJECT)
  const [project, setProject] = useState({
    id: props.match.params.id,
    title: '',
    project_focus: '',
    project_github: '',
    project_photo: '',
    project_stack: '',
  })

  useEffect(() => {
    if (data) {
      setProject(data.signup[0].message)
    }
  }, [data])

  return (
    <Formik
      initialValues={{
        title: project.title,
        project_focus: project.project_focus,
        project_github: project.project_github,
        project_photo: project.project_photo,
        project_stack: project.project_stack,

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
        editProject({ variables: values })
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

      </Form>

    </Formik>
  );
}
export default ProjectForm;



