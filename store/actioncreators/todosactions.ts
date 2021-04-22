import axios from 'axios'
import {todoactiontypes} from '../../types/todosreducertypes'

export const fetchtodos=()=>{
    return async(dispatch) =>{
        try {
            dispatch({type:todoactiontypes.fetcht_request})
            const todos=await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            dispatch({type:todoactiontypes.fetcht_success,payload:todos.data})
        } catch (error) {
            dispatch({type:todoactiontypes.fetcht_failure,payload:error.message})
        }
    }
}