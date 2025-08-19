import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a Mi App</h1>
        <p>Aquí inicia tu contenido principal.</p>
      </div>
    </div>
  );
}

export default App;