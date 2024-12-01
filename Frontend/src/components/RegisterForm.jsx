import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setErrors({})
    e.preventDefault();
    const newErrors = {};

    // Validación del nombre de usuario
    const name = e.target.name.value;
    if (!name) {
      newErrors.name = "El nombre de usuario es obligatorio.";
    }

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

    // Validación de la confirmación de contraseña
    const confirmPassword = e.target.confirmPassword.value;
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);
      try {
        // Llamada a la API de registro
        await registerUser(name, email, password);
        console.log(name, email, password)

        // Establecer mensaje de éxito y redirigir
        setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
        setTimeout(() => {
          window.location.reload();  // Redirigir al login después de 2 segundos
        }, 2000);
      } catch (err) {
        setErrors({ general: err.message });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 text-gray-50 flex flex-col px-4 py-5 rounded-md w-full sm:w-96 h-[500px] gap-5"
    >
      {/* Mensaje de éxito */}
      {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

      {/* Name */}
      <label htmlFor="name" className="text-xl font-bold">
        Nombre de Usuario
      </label>
      <input
        id="name"
        type="name"
        name="name"
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Introduce tu correo"
        required
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      {/* Email */}
      <label htmlFor="email" className="text-xl font-bold">
        Correo Electrónico
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Introduce tu Nombre"
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

      {/* Confirmar Contraseña */}
      <label htmlFor="confirmPassword" className="text-xl font-bold">
        Confirmar Contraseña
      </label>
      <input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        className="bg-gray-600 text-lg font-normal w-full px-4 py-2 rounded outline-none"
        placeholder="Confirma tu contraseña"
        required
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}
      {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

      {/* Botón de Enviar */}
      <button
        type="submit"
        className="flex justify-center items-center w-full bg-violet-400 px-4 py-2 rounded hover:bg-violet-500 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : "Registrarse"}
        <PaperAirplaneIcon className="h-6 w-6 ml-2 text-violet-700" />
      </button>
    </form>
  );
};

export default RegisterForm;
