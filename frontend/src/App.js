import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from "./Context/NotesContext/NoteState";
import Alert from './Components/Alert';

export default function App() {
  return (
    <NoteState>
      <div className="App">
        <Router>
          <Navbar />
          <Alert message="this is alert" />
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
