import axios from 'axios';
import redux, { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';
export const getTodos = async () => (dispatch: Dispatch) => {
  const res = await axios.get<TodoType[]>(url);
  dispatch({
    type: 'GET_TODOS',
    payload: res.data,
  });
};
