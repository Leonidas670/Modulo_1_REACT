import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Mi App</div>

      {/* Botón de menú (visible solo en móviles) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Enlaces de navegación (pantallas grandes) */}
      <ul className="hidden md:flex gap-x-6">
        <li><a href="#" className="hover:underline">Inicio</a></li>
        <li><a href="#" className="hover:underline">Servicios</a></li>
        <li><a href="#" className="hover:underline">Contacto</a></li>
      </ul>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <ul className="flex flex-col gap-y-2 mt-4 md:hidden absolute top-16 left-0 w-full bg-purple-600 p-4">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Servicios</a></li>
          <li><a href="#" className="hover:underline">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}