import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import { getTodos } from '../store/actions';


interface P {
  todos: TodoType[];
  getTodos: any;
}

const App: React.FC<P> = ({ todos, getTodos }) => {
  console.log(todos);
  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="App">
      <h1>Apa</h1>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todos.todos,
});


export default connect(mapStateToProps, { getTodos })(App);
