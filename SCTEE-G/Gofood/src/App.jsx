import React from 'react';
import Navbar from './component/navbar';
import Home from './pages/Home';
import Foto from "./image/Logo.png";
import './component/navbar.css'

function App() {

  return (
      <div className="App">
        <Navbar/> {/* Pass the openCart function to the Navbar */}
        <Home/>
      </div>
)
}

export default App;
