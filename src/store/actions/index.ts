/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, GetTodosAction } from './types';


const url = 'https://jsonplaceholder.typicode.com/todos';
export const getTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<TodoType[]>(url);
  dispatch<GetTodosAction>({
    type: ActionTypes.GET_TODOS,
    payload: res.data,
  });
};
