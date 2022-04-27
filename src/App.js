import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Visualizer from './pages/Visualizer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="visualizer" element={<Visualizer />} />
      </Routes>
    </div>
  );
}

export default App;
