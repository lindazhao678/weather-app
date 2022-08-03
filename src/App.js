import './App.css'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from "./pages/Weather";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
