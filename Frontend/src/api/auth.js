// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        console.log(response)
        throw new Error("Error al iniciar sesión");
      }
  
      const result = await response.json();
      // Guardar el token en el localStorage
      localStorage.setItem("token", result.token);
      console.log("Usuario logueado:", result);
      return result;
      
    } catch (error) {
      console.error(error);
    }
  };
  
  // Función para registrar un nuevo usuario
  export const registerUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }
  
      const result = await response.json();
      console.log("Usuario registrado:", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
  // Función para obtener el token guardado
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  

  