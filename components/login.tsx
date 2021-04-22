import React, { FC, useEffect } from 'react';
import { typetuseSelector } from './../hooks/typetuseSelector';
import Router from 'next/router'

const Login:FC = ({children}) => {
    const {auth}=typetuseSelector(state=>state)
   useEffect(()=>{
    let token
    if(process.browser){
        token=localStorage.getItem("token")
        if(!token){
            Router.push('/auth')
        }
    }
   },[])
    return (
       <>
       {children}
       </>
    );
}

export default Login;
