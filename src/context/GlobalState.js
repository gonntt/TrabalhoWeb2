import React, { createContext, useReducer } from 'react';

const initialState = {
  users: [],
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUser = (user) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, tasks: state.tasks, addUser, addTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
