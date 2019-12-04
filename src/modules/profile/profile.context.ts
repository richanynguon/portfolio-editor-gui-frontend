import React from 'react'

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
   }
};

export const ProfileContext = React.createContext(initialState) 