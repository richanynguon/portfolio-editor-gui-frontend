import React, {  Dispatch } from 'react'

type MyState = {
  bio: string;
  location: string;
  github: string;
  twitter: string;
  linkedin: string;
  stack: string;
  learning: string;
  interested: string;
  involved: string;
};

type ContextValue = {
  profile: MyState;
  setProfile: Dispatch<any>;
};


const initialState: ContextValue = {
  profile: { 
    bio: "",
    location: "",
    github: "",
    twitter: "",
    linkedin: "",
    stack: "",
    learning: "",
    interested: "",
    involved: "",
   },
  setProfile: (profile: { 
    bio: string
    location: string
    github: string
    twitter: string
    linkedin: string
    stack: string
    learning: string
    interested: string
    involved: string
   }) => {}
};

export const UserContext = React.createContext(initialState) 