import './App.css';
import React from "react";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './fonts/fonts.css';
import WhatWeDo from './pages/WhatWeDo.js';
import InteractiveMap from './pages/InteractiveMap.js';
import Aboutus from './pages/Aboutus.js';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/interactivemap" element={<InteractiveMap />} />
      <Route path="/about" element={<Aboutus />} />
    </Routes>
  </Router>
  );
}

export default App;
