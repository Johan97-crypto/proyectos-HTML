import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const position = [4.7110, -74.0721]; // Latitud y longitud de Bogotá

  return (
    <div className="App">
      <MapContainer center={position} zoom={20} style={{ height: '400px', width: '600px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default App;
