import * as React from 'react';
import './todoItem.css';


interface P {
  todo: TodoType;
  deleteTodo: any;
}

const mixNumHelper = (n: number): number => Math.floor(Math.random() * n) + 1;

const TodoItem: React.FC<P> = ({ todo, deleteTodo }) => (
  <>
    {' '}
    <div
      className={`todoItem todoItem-${todo.completed}`}
      style={{
        transform: `rotate(${mixNumHelper(20)}deg)`,
      }}
    >
      <h4>
        {todo.title}

        <span>{todo.id}</span>
      </h4>
      <p>
        {todo.completed ? 'Completed' : 'Not Completed'}
        {' '}
        <span className="delete" onClick={(): void => deleteTodo(todo.id)}>X</span>
        {' '}
      </p>
    </div>

    {' '}
  </>
);


export default TodoItem;
