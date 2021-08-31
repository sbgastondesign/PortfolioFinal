import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Section />
      <Project />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
