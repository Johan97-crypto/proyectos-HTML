import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio'; // Importar el componente de Inicio desde su archivo
import Machos from './Machos'; // Importar el componente de Machos desde su archivo
import Hembras from './Hembras'; // Importar el componente de Hembras desde su archivo

import './App.css';

function App() {
 

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/machos">Machos</Link></li>
            <li><Link to="/hembras">Hembras</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/machos" element={<Machos />} />
          <Route path="/hembras" element={<Hembras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
