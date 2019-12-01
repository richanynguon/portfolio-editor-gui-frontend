import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "@apollo/react-hooks";
import App from './App'
import  client  from './ApolloProvider'
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

