import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Notícias from './Components/Notícias';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Notícias></Notícias>
    </div>
  );
}

export default App;
