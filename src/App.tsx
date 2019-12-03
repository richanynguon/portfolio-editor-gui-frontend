import React, { useState } from 'react';
import Portfolio from './pages/Portfolio'
import { Route } from 'react-router';
import PrivateRoute from './utils/PrivateRoute';
import Admin from './pages/Admin';
import { UserContext } from './modules/users/users.context';

const App: React.FC = () => {
  const [state, setState] = useState()
  return (
    <div >
      <UserContext.Provider value={{state, setState}}>
        <Route path='/' component={Portfolio} />
        <PrivateRoute path='/admin' Component={Admin} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
