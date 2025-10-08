import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/nav";
import { Home } from "./pages/Home/home";
import { Footer } from "./components/footer";
import { Set } from "./pages/CreatSet/CSet";
import { Browse } from "./pages/Browse/browse";
import { InSet } from "./pages/InSet/Set";
import { Cards } from "./components/sets/cards";
import { CradsProvider } from "./context/cardContext";

function App() {
  return (
    <CradsProvider>
      <Router>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/set" element={<Set />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/card/:id" element={<InSet />} />
        </Routes>
      </Router>
    </CradsProvider>
  );
}

export default App;
