import {
  actionTypes,
  ActionTypesss,
  InitialStateT,
} from "../../types/authtypes";

const initialstate: InitialStateT = {
  user: null,
  loading: false,
  authenticate: false,
  error: null,
};
export const authreduser = (
  state = initialstate,
  actions: ActionTypesss
): InitialStateT => {
  switch (actions.type) {
    case actionTypes.login_request:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.login_success:
      return {
        ...state,
        loading: false,
        authenticate: true,
        user: actions.payload,
        error:null
      };
    case actionTypes.login_failure:
      return {
        ...state,
        loading: false,
        authenticate: false,
        error: actions.payload,
      };

    default:
      return state;
  }
};
