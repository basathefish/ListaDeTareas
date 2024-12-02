import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem("authToken");

    // Opcionalmente, también eliminar cualquier dato adicional (si es necesario)
    // localStorage.removeItem("userData");

    // Redirigir al usuario al login o a la página principal
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
