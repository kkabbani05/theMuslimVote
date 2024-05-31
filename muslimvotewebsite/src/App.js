import './App.css';
import React from "react";
import Home from "./pages/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about/vision" element={<Vision />} />
      <Route path="/about/team" element={<MeetTeam />} />
      <Route path="/about/contact" element={<Contact />} />
      <Route exact path="/donate" element={<Donation />} />
      <Route exact path="/volunteer" element={<Volunteer />} />
      <Route path="/resources/general" element={<ResourcesGen />} />
      <Route path="/resources/africa" element={<ResourcesAfr />} />
      <Route path="/resources/latinamerica" element={<ResourcesLat />} />
      <Route path="/resources/middleeast" element={<ResourcesMid />} />
      <Route path="/resources/policy" element={<ResourcesPol />} />
      <Route exact path="/eventgallery" element={<EventGallery />} />
      <Route path="/eventgallery/:eventName" element={<IndividualEventGallery />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
