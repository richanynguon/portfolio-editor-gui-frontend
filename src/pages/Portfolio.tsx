import React from 'react'
import { Switch, Route } from 'react-router'
import Welcome from '../components/welcome/Welcome'
import Bio from '../components/bio/Bio'
import Contact from '../components/contact/Contact'
import Projects from '../components/projects/Projects'
import NavBar from '../components/navbar/NavBar'
import AdminTab from '../components/admintab/AdminTab'
import Footer from '../components/footer/Footer'


const Portfolio: React.FC = () => {

  return (
    <div>
      <NavBar />
      <div className='parallax'></div>
      <div>
        <Switch>
      
          <Route path='/welcome' component={Welcome} />
          <Route path='/bio' component={Bio} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/sudo' component={AdminTab} />
    
        </Switch>
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio;


