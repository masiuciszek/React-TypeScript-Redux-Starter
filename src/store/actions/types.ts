export interface ITodoState {
  todos: TodoType[];
  loading: boolean;
}
export enum ActionTypes {
  GET_TODOS = 'GET_TODOS',
  REMOVE_TODO ='REMOVE_TODO'
}

export interface GetTodosAction {
  type: ActionTypes.GET_TODOS;
  payload: TodoType[];
}


export interface DeleteTodoAction {
  type: ActionTypes.REMOVE_TODO;
  payload: number;
}

// For the reducer
export type TodoActionTypes = GetTodosAction | DeleteTodoAction
