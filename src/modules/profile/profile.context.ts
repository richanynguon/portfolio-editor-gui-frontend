import React, { Dispatch } from 'react'

type MyState = {
  id: Number;
  bio: String;
  location:String;
  github:String;
  twitter:String;
  linkedin:String;
  stack:String;
  learning:String;
  involved:String;
  };
  
  type ContextValue = {
    profile: MyState ;
    setProfile: Dispatch<any>;
  };
  
  
  const initialState: ContextValue = {
    profile: {
      id: 0,
      bio: "",
      location: "",
      github: "",
      twitter: "",
      linkedin: "",
      stack: "",
      learning: "",
      involved: "",
     } ,
    setProfile: (profile: {   
      id: Number
      bio: String
      location:String
      github:String
      twitter:String
      linkedin:String
      stack:String
      learning:String
      involved:String }) => {}
  };

export const ProfileContext = React.createContext(initialState) 