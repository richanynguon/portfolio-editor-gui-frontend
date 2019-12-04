import React, { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio'
import { Route } from 'react-router';
import PrivateRoute from './utils/PrivateRoute';
import Admin from './pages/Admin';
import { UserContext } from './modules/users/users.context';
import EditProfile from './pages/EditProfile';
import EditProject from './pages/EditProject';
import { ProfileContext } from './modules/profile/profile.context';
import { ProjectContext } from './modules/projects/project.context';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_PROFILES } from './modules/profile/profile.queries';
import { GET_ALL_PROJECTS } from './modules/projects/projects.queries';
import NavBar from './components/navbar/NavBar';

const App: React.FC = () => {
  const [state, setState] = useState()
  const [profile, setProfile] = useState()
  const [projects, setProjects] = useState()

  const { data: thisProfile } = useQuery(GET_ALL_PROFILES)
  const { data: theseProjects } = useQuery(GET_ALL_PROJECTS)

  useEffect(() => {
    if(thisProfile){
      setProfile(thisProfile.getAllProfiles)
    }
    if (theseProjects){
      setProjects(theseProjects.getAllProjects)
    }
  }, [thisProfile, theseProjects, projects, profile])


  return (
    <div >
        <NavBar />
      <ProjectContext.Provider value={{ projects, setProjects }}>
        <ProfileContext.Provider value={{ profile, setProfile }}>
          <UserContext.Provider value={{ state, setState }}>
            <Route path='/' component={Portfolio} />
            <PrivateRoute path='/admin' Component={Admin} />
            <PrivateRoute path='/edit-profile/:id' Component={EditProfile} />
            <PrivateRoute path='/edit-project/:id' Component={EditProject} />
          </UserContext.Provider>
        </ProfileContext.Provider>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
