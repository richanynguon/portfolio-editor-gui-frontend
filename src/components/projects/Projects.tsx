import React, { useContext } from 'react'
import { ProjectContext } from '../../modules/projects/project.context'


export default function Projects() {
  const { projects } = useContext(ProjectContext)

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
    projectVote: ProjectVote
  }

  return (
    <div>
      {
        projects === undefined
          ? 'User does not have projects yet'
          : projects.map(project => `${project.id}`)
      }
    </div>
  )
}
