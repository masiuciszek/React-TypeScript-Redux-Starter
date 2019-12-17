export enum ActionTypes {
  GET_TODOS = 'GET_TODOS'
}

export interface GetTodosAction {
  type: ActionTypes.GET_TODOS;
  payload: Todo[];
}
