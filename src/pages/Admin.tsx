import React, { useContext } from 'react'
import ProjectForm from '../components/projectForm/ProjectForm'
import ProfileForm from '../components/profileForm/ProfileForm'
import { ProfileContext } from '../modules/profile/profile.context'
import { ProjectContext } from '../modules/projects/project.context'


export default function Admin() {
  const { profile } = useContext(ProfileContext)
  const { projects } = useContext(ProjectContext)
  
  return (
    <div>
      Test from Admin
      <ProjectForm />
      <ProfileForm />

      
    </div>
  )
}
