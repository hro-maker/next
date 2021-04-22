import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { todoReducer } from './todoreducer';
import { authreduser } from './authreducer';

const rootReducer=combineReducers({
    todo:todoReducer,
    auth:authreduser
})
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, 
        ...action.payload, 
      }
      if (state.count) nextState.count = state.count 
      return nextState
    } else {
      return rootReducer(state, action)
    }
  }

export type State=ReturnType<typeof rootReducer>  