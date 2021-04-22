
import { TypedUseSelectorHook } from 'react-redux';
import { State } from '../store/reducers/rootReducer';
import { useSelector } from 'react-redux';


export const typetuseSelector:TypedUseSelectorHook<State>=useSelector