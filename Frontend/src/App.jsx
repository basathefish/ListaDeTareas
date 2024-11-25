import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import DeleteTask from "./pages/DeleteTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="form-agregar" element={<AddTask />} />
          <Route path="/form-editar-tarea/:id" element={<EditTask/>} />
          <Route path="/eliminar-tarea/:id" element={<DeleteTask />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
