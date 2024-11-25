import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FormDeAgregar from './pages/FormDeAgregar';
import FormDeEditarTarea from './pages/FormDeEditarTarea';
import DeleteTask from './pages/DeleteTask'; 

function App() {
  return (
    <Router>
      <div className="bg-gray-950 grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <header className='flex justify-center items-center text-3xl text-gray-50 p-4'>
          <img src="./src/assets/images/logo.png" alt="logo del todo list"/>
          TodoList
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form-agregar" element={<FormDeAgregar />} />
            <Route path="/form-editar-tarea" element={<FormDeEditarTarea />} />
            <Route path="/delete-task" element={<DeleteTask />} />
          </Routes>
        </main>
        <footer className="text-center text-gray-50 p-6">
          Footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
