import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login"); // Estado para gestionar la pestaña activa

  return (
    <div className="bg-gray-950 grid grid-rows-[auto_1fr_auto] min-h-screen">
      {/* Cabecera */}
      <Header />
      
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-12 sm:px-4">
        {/* Sección de imagen */}
        <div className="flex justify-center items-center">
          <img
            className="w-[450px] h-[450px] object-cover sm:w-[350px] sm:h-[350px]"
            alt="imagen de una lista de tareas vacia"
            src="./src/assets/images/checklist.png"
          />
        </div>
        
        {/* Sección de formularios */}
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          {/* Pestañas de Login/Registro */}
          <div className="flex gap-6 mb-5 sm:flex-row sm:gap-6 sm:mb-8 justify-center w-full">
            <button
              className={`px-6 py-2 text-white font-semibold rounded-md ${activeTab === "login" ? "bg-violet-600" : "bg-gray-700"}`}
              onClick={() => setActiveTab("login")}
            >
              Iniciar sesión
            </button>
            <button
              className={`px-6 py-2 text-white font-semibold rounded-md ${activeTab === "register" ? "bg-violet-600" : "bg-gray-700"}`}
              onClick={() => setActiveTab("register")}
            >
              Registrarse
            </button>
          </div>

          {/* Formulario activo */}
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-50 py-6">
      </footer>
    </div>
  );
}

export default AuthPage;
