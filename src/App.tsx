import React from 'react';
import Portfolio from './pages/Portfolio'
import { Route } from 'react-router';


const App: React.FC = () => {
  return (
    <div >
      <Route exact path='/' component={Portfolio} />
    </div>
  );
}

export default App;
