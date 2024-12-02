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
        const result = await response.json()
        throw new Error(result.message ||"Error al iniciar sesión");
      }
  
      const result = await response.json();
      
      if (result.token) {
        // console.log("Usuario logueado:", result);
        localStorage.setItem("token", result.token);
        return result;
      } else {
        return { error: "Credenciales incorrectas" };
      }
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };
  
  // Función para registrar un nuevo usuario
  export const registerUser = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.message);
      }
  
      const result = await response.json();
      console.log("Usuario registrado:", result);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  // Función para obtener el token guardado
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  

  