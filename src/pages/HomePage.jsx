import React from 'react';
import '../CSS/style.css'; // Asegúrate de que tienes los estilos adecuados
// La importación de workersImage ya no es necesaria si la usas en CSS

function HomePage() {
  return (
    <div className="homepage">
      <section className="banner">
        <h1 className="heading-primary">Bienvenidos al Comité de Bidafarma Málaga</h1>
        <h2 className="heading-secondary">Nuestra Misión</h2>
        <p>En Comité Bidafarma Málaga, trabajamos juntos para mejorar nuestro entorno laboral y apoyar a cada uno de nuestros compañeros.</p>

      </section>

      {/* Añade más secciones según sea necesario */}
    </div>
  );
}


export default HomePage;

