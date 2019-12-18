import * as React from 'react';
import './todoItem.css';

interface P {
  todo: TodoType;
}

const TodoItem: React.FC<P> = ({ todo }) => {
  let a;
  return (
    <>
      {' '}
      <div className={`todoItem todoItem-${todo.completed}`}>
        <h4>
          {todo.title}

          <span>{todo.id}</span>
        </h4>
        <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
      </div>

      {' '}
    </>
  );
};
export default TodoItem;
