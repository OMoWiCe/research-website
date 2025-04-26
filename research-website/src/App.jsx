import React from 'react'
import './App.css';
import Navbar from './Components/Navbar.jsx';
import { Home } from './Components/Home.jsx';
import { About } from './Components/About.jsx';
import { Demo } from './Components/Demo.jsx';
import { Team } from './Components/Team.jsx';
import Footer from "./Components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Demo />
      <Team />
      <Footer />
    </div>
  )
}

export default App
