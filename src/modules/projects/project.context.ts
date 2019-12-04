import React, { Dispatch } from 'react'

type ProjectVote = {
  option: String;
  vote: Number;
}

type MyState = {
  project_stack: String;
  title: String;
  project_focus: String;
  project_github: String;
  id: Number;
  project_photo: String;
  projectVote: ProjectVote
};

type ContextValue = {
  projects: [MyState];
  setProjects: Dispatch<any>;
};


const initialState: ContextValue = {
  projects: [{
    project_stack: "",
    title: "",
    project_focus: "",
    project_github: "",
    id: 0,
    project_photo: "",
    projectVote: {
      option: "upvote",
      vote: 0
    },
  },
  ],
  setProjects: (projects: {}) => { }
};


export const ProjectContext = React.createContext(initialState) 