
import { GetTodosAction, ActionTypes, ITodoState } from '../actions/types';

const initialState: ITodoState = {
  todos: [],
  loading: true,
};

export default (state: ITodoState = initialState, action: GetTodosAction) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
