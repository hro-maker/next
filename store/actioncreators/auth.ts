
import { actionTypes } from "../../types/authtypes"
import axiosinstance from './../../../client/helpers/axios';
interface logindto{
    email:string,
    password:string
}
export const loginaction=(user:logindto)=>{
    return async (dispatch) =>{
        try {
            dispatch({type:actionTypes.login_request})
            const res= await axiosinstance.post('/api/login',user)
            if(res.status !== 400){
                if(process.browser){
                    localStorage.setItem("token",JSON.stringify(res.data))
                }
                dispatch({type:actionTypes.login_success,payload:res.data})
            }
        } catch (error) {
            dispatch({type:actionTypes.login_failure,payload:error.message})
        }  
    }
}

export const isuserLogin=()=>{
        return dispatch=>{
               try {
                let userdata;
                if(process.browser){
                    userdata=localStorage.getItem("token")
                }
                    if(!userdata){
                        dispatch({type:actionTypes.login_failure,payload:"please sign in"})
                    }else{
                        console.log(userdata)
                        dispatch({type:actionTypes.login_success,payload:JSON.parse(userdata)})
                    } 
               } catch (error) {
                dispatch({type:actionTypes.login_failure,payload:error.message})
               } 
        }
}