import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import EditTask from "./Pages/EditTask";
import DeleteTask from "./Pages/DeleteTask";
import Auth from "./Pages/Auth"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}>
        <Route path="/home" element={<Home />} />
          <Route path="form-agregar" element={<AddTask />} />
          <Route path="/form-editar-tarea/:id" element={<EditTask/>} />
          <Route path="/eliminar-tarea/:id" element={<DeleteTask />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
