import React, { createContext, useEffect, useState } from 'react';
import { firebaseApp } from '../../firebase';

export const LoginContext= createContext(); 

export const LoginProvider=(props)=>{
    const [user, setUser]= useState("");

    useEffect(() => {
         authListener();
    }, [user])
    const authListener = ()=>{
        firebaseApp.auth().onAuthStateChanged((user)=>{
            if(user){
                
                setUser(user);
            }
            else{
                setUser("");
            }
        })
    }

    return(
        <LoginContext.Provider value={[user, setUser]}>
         {props.children}
        </LoginContext.Provider>
    )
}