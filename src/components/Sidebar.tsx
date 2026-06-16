import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserZone } from './UserZone';

const Sidebar: React.FC = () => {
  return (
    <div 
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" 
      style={{ 
        width: '250px', // Ancho fijo necesario
        height: '100vh', // Ocupa todo el alto
        position: 'fixed', // Fija la sidebar para que no se mueva al hacer scroll
        top: 0,
        left: 0
      }}
    >
      {/* Logo del Proyecto */}
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold nav-title">VetConnect</span>
      </a>
      <hr />

      {/* Links de Navegación */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
            end
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/profesionales" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            Profesionales
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/veterinarias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            Veterinarias
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/calendario" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            Calendario
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/noticias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            Noticias
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/blogs" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            Blogs
          </NavLink>
        </li>
      </ul>
      <UserZone />
    </div>
  );
};

export default Sidebar;