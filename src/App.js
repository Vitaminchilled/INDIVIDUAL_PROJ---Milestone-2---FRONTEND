import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import FilmsPage from "./pages/FilmsPage";
import FilmDetails from "./pages/FilmDetails";
import ActorDetails from "./pages/ActorDetails";
import CustomersPage from "./pages/CustomersPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/films">Films</Link>
          <Link to="/customers" style={{ marginLeft: "0.5px" }}>Customers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
          <Route path="/actors/:actorId" element={<ActorDetails />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

