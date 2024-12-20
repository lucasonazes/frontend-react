import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import ListTasks from './Pages/ListTasks';
import NewTask from './Pages/NewTask';
import FinishedTasks from './Pages/FinishedTasks';
import UnfinishedTasks from './Pages/UnfinishedTasks';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav className="header">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/pages/tasks/list">Listar tarefas</Link></li>
                  <li><Link to="/pages/tasks/finished">Listar tarefas concluídas</Link></li>
                  <li><Link to="/pages/tasks/unfinished">Listar tarefas não concluídas</Link></li>
                  <li><Link to="/pages/tasks/new">Cadastrar tarefa</Link></li>
                  <li><Link to="/pages/tasks/edit">Alterar tarefa</Link></li>
              </ul>
          </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages/tasks/list" element={<ListTasks/>} />
          <Route path="/pages/tasks/finished" element={<FinishedTasks/>} />
          <Route path="/pages/tasks/unfinished" element={<UnfinishedTasks/>} />
          <Route path="/pages/tasks/new" element={<NewTask/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
