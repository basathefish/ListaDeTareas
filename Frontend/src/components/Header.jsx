import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Verificar si el token está en localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);  // Usuario logueado
    }
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('token');  
    setIsLoggedIn(false);  
    navigate('/');  
  };

  return (
    <header className="relative flex justify-center items-center text-3xl text-gray-50 p-4">
      <img src="./src/assets/images/logo.png" alt="logo del todo list" />
      <span className="ml-2">TodoList</span>

      {/* Botón de Logout en la esquina superior derecha */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-1 text-white font-semibold rounded-md bg-violet-600 text-sm"
        >
          Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default Header;
