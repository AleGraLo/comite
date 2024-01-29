import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './CSS/style.css'

function App() {
  return (
    <Router>
      <div className='banner p-5'>
      <Navbar />
      <AppRoutes />
      <Footer />
      </div>
    </Router>
  );
}

export default App;

