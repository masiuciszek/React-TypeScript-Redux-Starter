
import {
  GetTodosAction, ActionTypes, ITodoState, TodoActionTypes,
} from '../actions/types';

const initialState: ITodoState = {
  todos: [],
  loading: true,
};

export default (state: ITodoState = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };

    case ActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
