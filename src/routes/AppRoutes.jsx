import { Routes, Route } from 'react-router-dom';
import Noticias from '../pages/Noticias';
import DetalleNoticia from '../components/DetalleNoticia';
import Documentacion from '../pages/Documentacion';
import DetalleDocumento from '../components/DetalleDocumento';
import SobreNosotros from '../pages/SobreNosotros';
import HomePage from '../pages/HomePage'; 
import Tablon from '../pages/Tablon'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<DetalleNoticia />} />
      <Route path="/documentacion" element={<Documentacion />} />
      <Route path="/documentacion/:id" element={<DetalleDocumento/>} />
      <Route path="/tablon" element={<Tablon />} />

      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      {/* ... otras rutas ... */}
    </Routes>
  );
}

export default AppRoutes;
