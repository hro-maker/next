
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../store/actioncreators';


export const typetactions=()=>{
       const dispatch=useDispatch()     
      return  bindActionCreators(actioncreators,dispatch)    
}