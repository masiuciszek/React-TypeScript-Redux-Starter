import * as React from 'react';
import './todoItem.css';


interface P {
  todo: TodoType;
  deleteTodo: any;
}

const TodoItem: React.FC<P> = ({ todo, deleteTodo }) => {
  let a;
  return (
    <>
      {' '}
      <div className={`todoItem todoItem-${todo.completed}`}>
        <h4>
          {todo.title}

          <span>{todo.id}</span>
        </h4>
        <p>
          {todo.completed ? 'Completed' : 'Not Completed'}
          {' '}
          <span className="delete" onClick={() => deleteTodo(todo.id)}>X</span>
          {' '}
        </p>
      </div>

      {' '}
    </>
  );
};


export default TodoItem;
