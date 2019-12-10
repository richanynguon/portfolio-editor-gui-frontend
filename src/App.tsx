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
import { importAll } from './utils/importAll';
import * as s from './styles/styles'

const App: React.FC = () => {
  const [state, setState] = useState()
  const [profile, setProfile] = useState()
  const [projects, setProjects] = useState()
  const [image, setImage] = useState(0)

  const { data: thisProfile } = useQuery(GET_ALL_PROFILES)
  const { data: theseProjects } = useQuery(GET_ALL_PROJECTS)

  useEffect(() => {
    if (thisProfile) {
      setProfile(thisProfile.getAllProfiles)
    }
    if (theseProjects) {
      setProjects(theseProjects.getAllProjects)
    }
  }, [thisProfile, theseProjects, projects, profile])

  const images: Object = importAll(require.context('./assets/chromapics', false, /\.(png|jpe?g|svg)$/));
  const imagesName = Object.keys(images) as (keyof object)
  let i: number = image;
  const x: (keyof object) = imagesName[i]
  const imageDir = images[x];

  window.addEventListener('scroll', function () {
    const scrollPosition: number = window.pageYOffset
    const fps: number = 30;
    const imagePos: number = Math.round(scrollPosition / fps);

    if (imagePos < 336) {
      setImage(imagePos)
    } else {
      setImage(336)
    }

  });



  return (
    <s.App >
      <NavBar />
      <div className="scroll">
        <img id='sticky' src={imageDir} alt='' />
      </div>
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
    </s.App >
  );
}

export default App;
