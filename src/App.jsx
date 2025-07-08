import React, { useState, useEffect } from 'react';
import './index.css';
import logo from './logo.png'; // Importe o logo
import menuIcon from './menu-icon.png'; // Importe o ícone do menu

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600); // Verifica se é dispositivo móvel

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth >= 600) {
        setMenuVisible(false); // Fecha o menu ao mudar para desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <header>
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo JL Infinity" className="logo-image" />
            {!isMobile && <h1>JL Infinity</h1>} {/* Mostra o título apenas em desktop */}
          </div>
          {isMobile && (
            <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
          )}
        </div>
        {/* Menu de navegação sempre visível em desktop */}
        <nav className={`nav ${isMobile && menuVisible ? 'show' : ''}`}>
          <ul className="nav-links">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#localizacao">Localização</a></li>
          </ul>
        </nav>
      </header>

      {/* Se não for mobile, mostra o menu inline */}
      {!isMobile && (
        <nav>
          <ul className="nav-links">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#localizacao">Localização</a></li>
          </ul>
        </nav>
      )}

      <section id="servicos" className="floating-section">
        <h2>Beleza que vem da natureza</h2>
        <p>Tratamentos com produtos orgânicos, técnicas relaxantes e resultados reais.</p>
        <a href="https://wa.me/244939134321" target="_blank" rel="noopener noreferrer">Agendar no WhatsApp</a>
      </section>

      <section id="galeria">
        <h3>Nossos Serviços</h3>
        <div className="service">
          <img src="src/massagem2.jpeg" alt="Massagens Anti-Celulite" className="service-image" />
          <div className="service-info">
            <h4>Massagens Anti-Celulite</h4>
            <p>Reduz a aparência da celulite, melhora a circulação e tonifica a pele.</p>
          </div>
        </div>
        <div className="service">
          <img src="src/massagem2.jpeg" alt="Drenagem Linfática Relaxante" className="service-image" />
          <div className="service-info">
            <h4>Drenagem Linfática Relaxante</h4>
            <p>Ajuda a eliminar toxinas, reduz o inchaço e promove relaxamento.</p>
          </div>
        </div>
        <div className="service">
          <img src="src/massagem1.jpeg" alt="Massagem Corretora" className="service-image" />
          <div className="service-info">
            <h4>Massagem Corretora</h4>
            <p>Alivia tensões musculares e melhora a postura.</p>
          </div>
        </div>
        <div className="service">
          <img src="src/tratamentofacial1.jpeg" alt="Tratamentos Faciais" className="service-image" />
          <div className="service-info">
            <h4>Tratamentos Faciais</h4>
            <p>Combate acne e melasma, deixando a pele mais saudável e radiante.</p>
          </div>
        </div>
        <div className="service">
          <img src="src/transferir.jpeg" alt="Lifting Orgânico" className="service-image" />
          <div className="service-info">
            <h4>Lifting Orgânico</h4>
            <p>Eleva a pele de forma natural, proporcionando um aspecto rejuvenescido.</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Galeria</h3>
        <div className="gallery">
          <div className="gallery-item">
            <img src="src/massagem1.jpeg" alt="Massagem" />
            <div className="overlay">
              <p>Massagem relaxante que alivia tensões.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="src/tratamentofacial4.jpeg" alt="Tratamento Facial" />
            <div className="overlay">
              <p>Tratamentos faciais para rejuvenescimento.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="src/transferir.jpeg" alt="Lifting Orgânico" />
            <div className="overlay">
              <p>Lifting orgânico que eleva a pele naturalmente.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato">
        <h3>Contato</h3>
        <p>Telefone: <a href="https://wa.me/244939134321">939 134 321</a></p>

      </section>

      <section id="localizacao">
        <h3>Localização</h3>
        <p>Projeto Nova Vida, Rua 14, Casa N°46, Talatona, Luanda, Angola</p>
        <p>Bem-vindo! Pertinho de você, venha nos fazer uma visita!</p>
      </section>

      <footer style={{ backgroundColor: '#7E57C2', padding: '10px' }}>
        <p>&copy; {new Date().getFullYear()} JL Infinity.</p>
      </footer>
    </div>
  );
}

export default App;