import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from "./Context/NotesContext/NoteState";


export default function App() {
  return (
    <NoteState>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </NoteState>
  );
}
