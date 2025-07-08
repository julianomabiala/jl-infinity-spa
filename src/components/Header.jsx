import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import menuIcon from '../assets/menu-icon.png';
import '../index.css';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth >= 600) setMenuVisible(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo JL Infinity" className="logo-image" />
          {!isMobile && <h1>JL Infinity</h1>}
        </div>
        {isMobile && (
          <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        )}
      </div>
      <nav className={`nav ${isMobile && menuVisible ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#localizacao">Localização</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;