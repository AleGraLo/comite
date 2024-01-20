import { Routes, Route } from 'react-router-dom';
import Noticias from '../pages/Noticias';
import DetalleNoticia from '../components/DetalleNoticia';
import Documentacion from '../pages/Documentacion';
import SobreNosotros from '../pages/SobreNosotros';
import HomePage from '../pages/HomePage'; // Asumiendo que tienes un componente para la página de inicio

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<DetalleNoticia />} />
      <Route path="/documentacion" element={<Documentacion />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      {/* ... otras rutas ... */}
    </Routes>
  );
}

export default AppRoutes;
