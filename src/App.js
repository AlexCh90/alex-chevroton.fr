import React, { useEffect, useState } from 'react';
import './assets/styles/App.scss'
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App" id="top">
      <Carousel />
      <Header hidden={scrolled} />
      <Navbar scrolled={scrolled} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;