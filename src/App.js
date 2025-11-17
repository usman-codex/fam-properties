import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; // Hero component import karein

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      {/* Baaqi website ke sections yahan neeche ayeinge */}
    </div>
  );
}

export default App;