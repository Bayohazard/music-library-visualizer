import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Visualizer from './pages/Visualizer';
import Filter from './pages/Filter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="visualizer" element={<Visualizer />} />
        <Route path="filter" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
