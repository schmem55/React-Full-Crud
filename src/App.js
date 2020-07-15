import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.svg"
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.google.com" target="_blank">
            <img src={logo} width="30" height="30" alt="Coding crud" />
          </a>
          <Link to="/" className="navbar-brand">Mern Stack todo app</Link>
          <div className="nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>  
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={TodosList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create"  component={CreateTodo}/>

      </div>
    
    </Router>
  );
}

export default App;
