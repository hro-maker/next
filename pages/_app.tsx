import React, {FC, useEffect} from 'react';
import {AppProps} from 'next/app';
import { wrapper } from './../store/index';
import '../style/general.css'
import { typetactions } from './../hooks/typedactioncreators';
import { typetuseSelector } from './../hooks/typetuseSelector';
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
    const {isuserLogin}= typetactions()
    const {auth}=typetuseSelector(state=>state)
    useEffect(()=>{
            if(!auth.authenticate){
                isuserLogin()
            }
    },[])
    return <Component {...pageProps} />
};

export default wrapper.withRedux(WrappedApp);