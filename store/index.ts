import { Context, createWrapper } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import{ reducer, State} from './reducers/rootReducer';
import  thunk, { ThunkDispatch }  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = (context: Context) => createStore(reducer,composeWithDevTools(
    applyMiddleware(thunk)
  ));

export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
export type NextThunkDispatch = ThunkDispatch<State, void, AnyAction>