import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Support from './components/Support';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <TrustSection />
      <Products />
      <Pricing />
      <Support />
      <About />
      <Footer />
    </div>
  );
}

export default App;