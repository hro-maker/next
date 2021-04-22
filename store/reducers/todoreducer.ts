import {
  ItodosInitialstate,
  todoactiontypes,
  TodosActionsTypes,
} from "./../../types/todosreducertypes";
const Initialstate: ItodosInitialstate = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = Initialstate,
  actions: TodosActionsTypes
): ItodosInitialstate => {
  switch (actions.type) {
    case todoactiontypes.fetcht_request:
      return {
        ...state,
        loading: true,
      };
      break;
    case todoactiontypes.fetcht_success:
      return {
        ...state,
        loading: false,
        todos: actions.payload,
      };
      break;
    case todoactiontypes.fetcht_failure:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
      break;
    default:
      return state;
  }
};
