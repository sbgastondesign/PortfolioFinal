import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
