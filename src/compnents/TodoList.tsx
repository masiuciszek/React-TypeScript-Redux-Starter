import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { getTodos, deleteTodo } from '../store/actions';

import TodoItem from './TodoItem';
import './todoList.css';

interface P {
  // Type function , because of redux thunk
  getTodos: Function;
  deleteTodo: typeof deleteTodo;
  todos: TodoType[];
  loading: boolean;
}

const TodoList: React.FC<P> = ({
  getTodos, todos, deleteTodo, loading,
}) => {
  const [showTodos, setShowTodos] = React.useState<boolean>(false);
  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="TodoListStyles">
        <div className="btn-group">
          <button type="button" onClick={(): void => setShowTodos(!showTodos)}>{showTodos ? 'Hide' : 'Show'}</button>
        </div>
        {loading && <h3>...Loading</h3> }
        {!loading && showTodos && (
          todos.map((todo: TodoType): JSX.Element => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: state.todos.todos, loading: state.todos.loading });

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);
