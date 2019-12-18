import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { getTodos } from '../store/actions';
import TodoItem from './TodoItem';
import './todoList.css';

interface P {
  getTodos: any;
  todos: TodoType[];
}

const TodoList: React.FC<P> = ({ getTodos, todos }) => {
  const [showTodos, setShowTodos] = React.useState<boolean>(false);
  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="TodoListStyles">
        <div className="btn-group">
          <button type="button" onClick={() => setShowTodos(!showTodos)}>Show Todos</button>
        </div>
        {showTodos && (
          todos.map((todo: TodoType): JSX.Element => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: state.todos.todos });

export default connect(mapStateToProps, { getTodos })(TodoList);