import React from 'react';
import './App.css';

// FIREBASE
import './utils/firebaseUtils.js';

// COMPONENTS
import Navbar from './components/shared/navbar';
import Main from './components/router/main';
import Footer from './components/shared/footer';
import Itinerary from './components/content/itinerary';
import Edutech from './components/content/edutech';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Itinerary />
      <Edutech />
      <Footer />
    </div>
  );
}

export default App;
