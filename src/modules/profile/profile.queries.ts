import { gql } from "apollo-boost";

export const CREATE_PROFILE = gql`
mutation Profile($bio: String, $location: String, $github: String, $twitter: String, $linkedin: String, $stack: String, $learning: String, $involved: String){
  createProfile(
    bio: $bio
    location: $location
    github: $github
    twitter: $twitter
    linkedin: $linkedin
    stack: $stack
    learning: $learning
    involved:$involved
  ){
    path
    message
  }
}

`;

export const GET_PROFILE = gql`
query User($id: Float!){
  getProfile(id: $id){
    id
    bio
    location
    github
    twitter
    linkedin
    stack
    learning
    involved
  }
}
`;

/*
getAllProfiles
*/

export const GET_ALL_PROFILES = gql`
query{
  getAllProfiles{
    id
    bio
    location
    github
    twitter
    linkedin
    stack
    learning
    involved
  }
}
`;

export const EDIT_PROFILE = gql`
mutation Profile($bio: String, $location: String, $github: String, $twitter: String, $linkedin: String, $stack: String, $learning: String, $involved: String){
  editProfile(
    bio: $bio
    location: $location
    github: $github
    twitter: $twitter
    linkedin: $linkedin
    stack: $stack
    learning: $learning
    involved:$involved
  ){
    path
    message
  }
}
`;


