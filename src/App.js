import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar'; // Yahan import karein

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      {/* Hero Section ya baaqi content yahan ayega */}
      {/* Hum ne neeche space daala hai taake scroll karke effect dekh sakein */}
      <header className="App-header">
        <h1>Scroll Down to see Navbar Effect</h1>
        <p>Your content starts here.</p>
      </header>
    </div>
  );
}

export default App;