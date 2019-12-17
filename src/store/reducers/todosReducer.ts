
import { GetTodosAction, ActionTypes } from '../actions/types';

const initialState = {

};

export default (state: Todo[] = [], action: GetTodosAction) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return action.payload;
    default:
      return state;
  }
};
