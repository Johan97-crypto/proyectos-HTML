import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio'; // Importar el componente de Inicio desde su archivo
import Machos from './Machos'; // Importar el componente de Machos desde su archivo
import Hembras from './Hembras'; // Importar el componente de Hembras desde su archivo

import './App.css';
import imagenPerro1 from './img/perro1.jpg';
import imagenPerro2 from './img/perro2.jpg';
import imagenPerro3 from './img/perro3.jpg';
import imagenPerro4 from './img/perro4.jpg';
import imagenPerro5 from './img/perro5.jpg';

function App() {
  const [imagenes, setImagenes] = useState([
    // Array de imágenes
  ]);

  // Resto del código para manejar el estado y las funciones

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
