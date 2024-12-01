import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth"; 

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validación del email
    const email = e.target.email.value;
    if (!email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    }

    // Validación de la contraseña
    const password = e.target.password.value;
    if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);
      try {
        // Llamada al backend para validar las credenciales
        const response = await loginUser(email, password);

        if (response && response.token) {
          // Guardar el token en localStorage
          // localStorage.setItem("authToken", response.token);

          // Redirigir al usuario a la página principal
          console.log("Inicio de sesión exitoso");
          navigate("/home");
        } else {
          setErrors({ general: "Credenciales incorrectas, por favor intente nuevamente." });
        }
      } catch (error) { //toma el mensaje de error recibido {desde el back viene}
        console.error(error);
        setErrors({ general: error.message });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 text-gray-50 flex flex-col px-4 py-5 rounded-md w-full sm:w-96 h-[400px] gap-5"
    >
      {/* Email */}
      <label htmlFor="email" className="text-xl font-bold">
        Correo Electrónico
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Introduce tu correo"
        required
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Contraseña */}
      <label htmlFor="password" className="text-xl font-bold">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        name="password"
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Introduce tu contraseña"
        required
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

      {/* Botón de Enviar */}
      <button
        type="submit"
        className="flex justify-center items-center w-full bg-violet-400 px-4 py-2 rounded hover:bg-violet-500 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : "Iniciar sesión"}
        <PaperAirplaneIcon className="h-6 w-6 ml-2 text-violet-700" />
      </button>
    </form>
  );
};

export default LoginForm;
