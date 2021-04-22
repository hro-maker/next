import React, { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import  axios  from 'axios';
import {Itodo} from '../../types/todosreducertypes'
import Login from './../../components/login';
interface todoprops{
        todo:Itodo
}
const todoitem:FC<todoprops> = ({todo}) => {
    const [state,setState]=useState<boolean>(todo.completed)
    
    return (
        <Login>
            {todo.title}
            <input type="checkbox" onChange={()=>setState(prev=>!prev)} checked={state}/>
        </Login>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
                const todo=await axios.get(`https://jsonplaceholder.typicode.com/todos/${context.query.id}`) 
    return {
        props:{
                todo:todo.data
        }
    }
  }

export default todoitem;
