import React from 'react';

function Galeria() {
  return (
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
  );
}

export default Galeria;