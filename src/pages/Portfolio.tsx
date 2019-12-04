import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router'
import Welcome from '../components/welcome/Welcome'
import Bio from '../components/bio/Bio'
import Contact from '../components/contact/Contact'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar'
import AdminTab from '../components/admintab/AdminTab'
import { ProfileContext } from '../modules/profile/profile.context'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_PROJECTS } from '../modules/projects/projects.queries'

const Portfolio: React.FC = () => {
  const [profile, setProfile] = useState()
  const { data } = useQuery(GET_ALL_PROJECTS)

  useEffect(() => {
    if (data){
      setProfile(data.getAllProfiles)
    }
  }, [data])

  return (
    <div>
      {/* Nav Bar at the beginning but disappears as scroll and reappears after animation*/}
      <NavBar />
      <div className='parallax'></div>
      <div>
        <Switch>
          <ProfileContext.Provider value={profile}>
          <Route path='/welcome' component={Welcome} />
          <Route path='/bio' component={Bio} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/sudo' component={AdminTab} />
          </ProfileContext.Provider>
        </Switch>
      </div>
    </div>
  )
}

export default Portfolio;


