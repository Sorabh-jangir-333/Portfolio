import React from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import Stats from "./components/Stats";
import ServicesSection from "./components/ServicesSection";
function App() {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <HeroSection />
      <Stats/>
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
