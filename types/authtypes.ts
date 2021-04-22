export interface Iuser {
  _id: string;
  name: string;
  email: string;
  password: string;
}
export interface InitialStateT {
  user: null | {
    user: Iuser;
    token: string;
  };
  loading: boolean;
  authenticate: boolean;
  error: null | string;
}

export enum actionTypes {
  login_request = "login_request",
  login_success = "login_success",
  login_failure = "login_failure",
}

interface loginrequest {
  type: actionTypes.login_request;
}
interface loginsucces {
  type: actionTypes.login_success;
  payload: { user: Iuser; token: string };
}
interface loginfailue {
  type: actionTypes.login_failure,payload:string;
}

export type ActionTypesss=loginrequest | loginsucces | loginfailue