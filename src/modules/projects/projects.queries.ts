import { gql } from "apollo-boost";


export const CREATE_PROJECT = gql`
mutation Project(  
  $project_focus: String
  $project_github: String!
  $project_stack: String!
  $project_photo: String
  $title: String!
  ){
  createProject(
  project_focus: $project_focus
  project_github:$project_github
  project_stack: $project_stack
  project_photo: $project_photo
  title: $title
  )
}
`;

export const GET_PROJECT = gql`
query Project($id: Float!){
  getProject(id: $id){
   userId
    id
    title
    project_github
    project_focus
    project_stack
    project_photo
    projectVote{
      id
      option
      votes
    }
  }
}
`;

export const GET_ALL_PROJECTS = gql`
query {
  getAllProjects(skip: 0, take: 20){
    id
    title
    project_github
    project_focus
  projectVote{
    id
    option
    votes
  }
    project_stack
    project_photo
   
  }
}
`;

export const EDIT_PROJECT = gql`
mutation Project(  
  $project_focus: String
  $project_github: String
  $project_stack: String
  $project_photo: String
  $title: String
  $id: Float!
  ){
  editProject(
  project_focus: $project_focus
  project_github:$project_github
  project_stack: $project_stack
  project_photo: $project_photo
  title: $title
  id: $id
  ){
    path
    message
  }
}
`;

export const UPVOTE_PROJECT = gql`
mutation Project($id: Float!){
  upVoteProject(
    id:$id
  )
}
`;

export const DELETE_PROJECT = gql`
mutation Project($id: Float!){
  deleteProject(
    id:$id
  )
}
`;
