import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Servicos />
      <Galeria />
      <Contato />
      <Localizacao />
      <Footer />

      {scrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 15px',
            borderRadius: '50%',
            fontSize: '20px',
            backgroundColor: '#7E57C2',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.4)'
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
