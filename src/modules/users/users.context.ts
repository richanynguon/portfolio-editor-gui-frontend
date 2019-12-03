import React, {  Dispatch } from 'react'

type MyState = {
user: String
};

type ContextValue = {
  state: MyState;
  setState: Dispatch<any>;
};


const initialState: ContextValue = {
  state: { user: "" },
  setState: (state: { user: String }) => {}
};

export const UserContext = React.createContext(initialState) 