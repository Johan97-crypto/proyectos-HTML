import React, { useState } from 'react';
import './App.css';
import imagenPerro1 from './img/Machos/1.jpg';
import imagenPerro2 from './img/Machos/2.jpg';
import imagenPerro3 from './img/Machos/3.jpg';
import imagenPerro4 from './img/Machos/4.jpg';
import imagenPerro5 from './img/Machos/5.jpg';

function Machos() {
  const [imagenes, setImagenes] = useState([
    { imagen: imagenPerro1, nombre: "Rex", raza: "Labrador", genero: "Masculino", edad: "3 años", tiempoSinAdopcion: "6 meses" },
    { imagen: imagenPerro2, nombre: "Luna", raza: "Golden Retriever", genero: "Femenino", edad: "2 años", tiempoSinAdopcion: "1 año" },
    { imagen: imagenPerro3, nombre: "Max", raza: "Bulldog", genero: "Masculino", edad: "4 años", tiempoSinAdopcion: "2 años" },
    { imagen: imagenPerro4, nombre: "Bella", raza: "Poodle", genero: "Femenino", edad: "5 años", tiempoSinAdopcion: "1 año" },
    { imagen: imagenPerro5, nombre: "Rocky", raza: "Pastor Alemán", genero: "Masculino", edad: "2 años", tiempoSinAdopcion: "8 meses" }
  ]);

  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [tiempoSinAdopcion, setTiempoSinAdopcion] = useState("");
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const agregarImagenes = (event) => {
    const nuevasImagenes = Array.from(event.target.files).map(file => {
      const url = URL.createObjectURL(file);
      return { imagen: url, nombre, raza, genero, edad, tiempoSinAdopcion };
    });
    setImagenes(prevImagenes => [...prevImagenes, ...nuevasImagenes]);
    // Limpiar los campos de entrada después de agregar las imágenes
    setNombre("");
    setRaza("");
    setGenero("");
    setEdad("");
    setTiempoSinAdopcion("");
    setShowModal(false); // Cerrar el modal después de agregar las imágenes
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Marca de la barra de navegación */}
          <a className="navbar-brand" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#007BFF" className="bi bi-gitlab" viewBox="0 0 16 16">
              <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/>
            </svg>{"  "} Caninos
          </a>
          {/* Botón para colapsar la barra de navegación en dispositivos pequeños */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Contenido de la barra de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Elementos de la barra de navegación */}
              <li className="nav-item">
                <a className="nav-link custom-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary ml-auto" onClick={abrirModal}>Agregar</button>
                <input id="input-imagen" type="file" accept="image/*" multiple={true} onChange={agregarImagenes} style={{ display: 'none' }} />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Machos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hembras</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Fin del Navbar */}

      {/* Modal para ingresar la información */}
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Imagen</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Formulario para ingresar la información */}
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="raza">Raza:</label>
                  <input type="text" className="form-control" id="raza" value={raza} onChange={(e) => setRaza(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="genero">Género:</label>
                  <input type="text" className="form-control" id="genero"
value={genero} onChange={(e) => setGenero(e.target.value)} />
</div>
<div className="form-group">
  <label htmlFor="edad">Edad:</label>
  <input type="text" className="form-control" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
</div>
<div className="form-group">
  <label htmlFor="tiempoSinAdopcion">Tiempo sin ser adoptado:</label>
  <input type="text" className="form-control" id="tiempoSinAdopcion" value={tiempoSinAdopcion} onChange={(e) => setTiempoSinAdopcion(e.target.value)} />
</div>
<div className="form-group">
  <label htmlFor="input-imagen">Seleccionar Imágenes:</label>
  <input id="input-imagen" type="file" accept="image/*" multiple={true} onChange={agregarImagenes} className="form-control-file" />
</div>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
<button type="button" className="btn btn-primary" onClick={agregarImagenes}>Agregar</button>
</div>
</div>
</div>
</div>
)}

{/* Carrusel */}
<div className="container d-flex justify-content-center">
<div className="card position" style={{ width: "18rem" }}>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
<div className="carousel-inner">
{imagenes.map((imagen, index) => (
<div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
  <img src={imagen.imagen} alt={`Perro ${index + 1}`} className="imagen-galeria" />
</div>
))}
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
<div className="card-body">
<h5 className="card-title">Fundación Caninos</h5>
</div>
</div>
</div>

{/* Tarjetas de imágenes */}
<div className="container">
<div className="card-deck d-flex justify-content-between flex-wrap">
{imagenes.map((imagen, index) => (
<div key={index} className="card mb-3" style={{ width: '18rem' }}>
<img src={imagen.imagen} className="card-img-top" alt={`Perro ${index + 1}`} />
<div className="card-body">
<h5 className="card-title">{imagen.nombre}</h5>
<p className="card-text">Raza: {imagen.raza}<br/>Género: {imagen.genero}<br/>Edad: {imagen.edad}<br/>Tiempo sin ser adoptado: {imagen.tiempoSinAdopcion}</p>
</div>
</div>
))}
</div>
</div>
</div>
);
}

export default Machos;
