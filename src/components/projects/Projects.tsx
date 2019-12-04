import React, { useState, useEffect } from 'react'
import { GET_ALL_PROJECTS } from '../../modules/projects/projects.queries'
import { useQuery } from '@apollo/react-hooks'

export default function Projects() {
  const [projects, setProjects] = useState()
  const { data, loading } = useQuery(GET_ALL_PROJECTS)
  
  type ProjectVote = {
    option: String;
    votes: Number
  }

  type ProjectValue = {
    project_stack: String;
    title: String;
    project_focus: String;
    project_github: String;
    id: Number;
    project_photo: String;
    projectVote: [ProjectVote]
  }

  useEffect(() => {
    if (data) {
      setProjects(data.getAllProjects)
    }
  }, [])

  return (
    <div>
      {
        projects
          ? 'User does not have projects yet'
          : projects.map((project: ProjectValue) => `${project.project_stack}`)
      }
      project
    </div>
  )
}
