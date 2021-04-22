import { GetServerSideProps } from 'next';
import React from 'react';
import { typetuseSelector } from './../hooks/typetuseSelector';
import { typetactions } from './../hooks/typedactioncreators';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchtodos } from '../store/actioncreators/todosactions';
import  Link  from 'next/link';
const index:React.FC = () => {
    const {todo}=typetuseSelector(state =>state)
    
    return (
        <div  className="wraper">
           {todo.todos.map(el =>
               <Link href={`/todo/${el.id}`}  >
                    <div  className="item" key={el.id}>
                        <a><span>{el.id}</span>  {el.title.repeat(10)}</a>
                    </div>
                    </Link>
            )}
        </div>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchtodos())
})
// export const getserverSideProps: GetServerSideProps = async (context) => {
//     return {
//         props:{}
//     }
//   }
export default index;
