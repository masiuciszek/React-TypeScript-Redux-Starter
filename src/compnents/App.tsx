import React from 'react';

import TodoList from './TodoList';


interface AppProps {

}

const App: React.FC<AppProps> = () => (
  <div className="App">
    <TodoList />
  </div>
);


export default App;
