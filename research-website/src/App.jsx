import React from 'react'
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Home } from './components/Home.jsx';
import { About } from './components/Aboout.jsx';
import { Demo } from './components/Demo.jsx';
import { Team } from './components/Team.jsx';
import Footer from "./components/Footer";


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
