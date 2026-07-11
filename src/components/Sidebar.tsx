import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserZone } from './UserZone';
import '../styles/sidebar.css'
import { FaEnvelope, FaInstagram, FaUserDoctor } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";

//https://react-icons.github.io/react-icons/
// Función para abrir Email
  const abrirEmail = () => {
    if (true) {
      window.open(`mailto:veteri.net.ar@gmail.com`, '_blank');
    }
  };

const Sidebar: React.FC = () => {
  const [loginButton] = useState<boolean>(false)
  return (
    <div 
      className="sidebar p-3  bg-dark">
      {/* Logo del Proyecto */}
      <a href="/" className="page-title d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold nav-title">Veteri.net</span>
      </a>

      {/* Links de Navegación */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
            end
          >
            <FaHome />
            <b>Inicio</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/veterinarias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaHospitalAlt />
            <b>Veterinarias</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/profesionales" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaUserDoctor />
            <b>Profesionales</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/calendario" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaRegCalendarAlt />
            <b>Calendario</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/noticias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaRegNewspaper />
            <b>Noticias</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/blogs" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaBlog />
            <b>Blog</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/extraviados" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaSearch />
            <b>Perdidos / Encontrados</b>
          </NavLink>
        </li>
      </ul>
      {loginButton && <UserZone />}
      <div className="media-buttons">
      <Link 
          
          to={'https://www.instagram.com/veteri.net.ar?utm_source=qr&igsh=b29qb3dlbmprYm51'}
          target='_blank'
          className="d-flex align-items-center gap-2"
          title='Ir al Instagram'
        >
        <FaInstagram size={40} color='rgb(127,105,154)'/>
        </Link>
      <Link 
          to={'#'}
          onClick={abrirEmail}
          className="d-flex align-items-center gap-2"
          title='Enviar correo'
        >
          <FaEnvelope size={40} color='rgb(127,105,154)'/>
        </Link>
        </div>
    </div>
  );
};

export default Sidebar;