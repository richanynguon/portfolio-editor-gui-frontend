import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "@apollo/react-hooks";
import App from './App'
import client from './utils/client'
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>, document.getElementById('root'));

