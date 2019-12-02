import { gql } from "apollo-boost";

export const CONTACT_POST = gql`
mutation User($email: String!, $name: String, $message: String){
  sendBalooEmail(contactIput:{
    email: $email
    name: $name
    message: $message
  }){
    path
    message
  }
  }
`;

export const SIGNUP = gql`
mutation User($email: String!, $password: String!, $user_name: String!){
  signup(signupInput:{
    email: $email
    password: $password
    user_name: $user_name
  }){
    path
    message
  }
}
`;

export const LOGIN = gql`
mutation User($email: String!, $password: String!){
  login(loginInput:{
    email: $email
    password: $password
  }){
    path
    message
  }
}
`;

export const LOGOUT = gql`
mutation{
  logout{
    path
    message
  }
}
`;

