import React from 'react';
import '../CSS/style.css'; // Asegúrate de que tienes los estilos adecuados
import workersImage from '../assets/DALL·E 2024-01-21 13.08.39 - A graphic design style image featuring a variety of workers in different environments. There are warehouse workers wearing gray overalls or shirts wit.png';

function HomePage() {
  return (
    <div className="homepage">
      <section className="banner">
        <h1 className="heading-primary">Bienvenidos al Comité de Bidafarma Málaga</h1>
        <img src={workersImage} alt="Trabajadores" className="workers-image" />
      </section>
      <section className="content">
        <h2 className="heading-secondary">Nuestra Misión</h2>
        <p>En Comité Bidafarma Málaga, trabajamos juntos para mejorar nuestro entorno laboral y apoyar a cada uno de nuestros compañeros.</p>
      </section>
      {/* Añade más secciones según sea necesario */}
    </div>
  );
}

export default HomePage;

