import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeWithTasksList from './Pages/HomeWithTasksList';
import HomeEmpty from './Pages/HomeEmpty';
import FormDeAgregar from './Pages/FormDeAgregar';
import FormDeEditarTarea from './Pages/FormDeEditarTarea';
import DeleteTask from './Pages/DeleteTask'; 

function App() {
  return (
    <Router>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <header className="underline-offset-2 rounded"></header>
        <main className="underline-offset-2 rounded">
          <Routes>
            <Route path="/" element={<HomeEmpty />} />
            <Route path="/home-tasks" element={<HomeWithTasksList />} />
            <Route path="/form-agregar" element={<FormDeAgregar />} />
            <Route path="/form-editar-tarea" element={<FormDeEditarTarea />} />
            <Route path="/delete-task" element={<DeleteTask />} />
           
          </Routes>
        </main>
        <footer className="underline-offset-2 rounded"></footer>
      </div>
    </Router>
  );
}

export default App;
