import React from 'react';
import Portfolio from './pages/Portfolio'
import { Route } from 'react-router';
import PrivateRoute from './utils/PrivateRoute';
import Admin from './pages/Admin';
import NavBar from './components/navbar/NavBar';


const App: React.FC = () => {
  return (
    <div >
      <Route path='/' component={Portfolio} />
      <PrivateRoute path='/admin' Component={Admin} />
    </div>
  );
}

export default App;
