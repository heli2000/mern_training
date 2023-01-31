import React, { createContext, useReducer } from 'react';

const getInitialState = () => {
    let Iuser = { user: { _id: null, name: null, pass: null, __v: null } };
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : Iuser;
}
  

export const UserLoginContext = createContext();

const initialState = getInitialState();

const reducer = (state, action) =>{
    switch (action.type) {
        case "updateUserLoginInfo":
            localStorage.setItem("user",JSON.stringify(action.payload));
            return Object.assign(state,action.payload);

        case "logoutUser":
            localStorage.removeItem("user"); 
            return Object.assign(state,action.payload);
    
        default:
            break;
    }
}

export const UserLoginProvider = (props) => {

    const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <UserLoginContext.Provider  value={[state, dispatch]}>
        {props.children}
    </UserLoginContext.Provider>
  )
}
