import React from 'react';
import './App.css';

// FIREBASE
import './utils/firebaseUtils.js';

// COMPONENTS
import Navbar from './components/shared/navbar';
import Main from './components/router/main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
