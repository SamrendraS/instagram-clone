import React from 'react';

import NavBar from './components/navbar.component';
import PostList from './components/postList.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PostList />
    </div>
  );
}

export default App;
