import React, { useState } from 'react';

// UseState presevar el valor de una variable

function Contador() {
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>He hecho click {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Click
      </button>
    </div>
  );
}

// UseState preserva el valor de una variable
// Implementen {{}} cuando sea necesario

function Contador2() {
  const [contador, setContador] = useState(0);
  if (contador < 10) {
    return (
      <div>
        <p style={{ color: 'blue' }}>He hecho click {contador} veces</p>
        <button onClick={() => setContador(contador + 1)}>
          Click
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ color: 'red' }}>He hecho click {contador} veces</p>
        <button onClick={() => setContador(contador + 1)}>
          Click
        </button>
      </div>
    );
  }
}

export { Contador, Contador2 };
//export default Contador2;
