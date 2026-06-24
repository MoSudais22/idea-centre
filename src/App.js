import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programmes from './components/Programmes';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programmes />
        <LatestNews />
        <Footer />
    </div>
  );
}

export default App;