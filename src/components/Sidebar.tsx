import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserZone } from './UserZone';
import '../styles/sidebar.css'
import { FaEnvelope, FaInstagram, FaUserDoctor } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
//import { FaRegNewspaper } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";  

//https://react-icons.github.io/react-icons/
// Función para abrir Email
  const abrirEmail = () => {
    if (true) {
      window.open(`mailto:Veteri.net.ar.ar@gmail.com`, '_blank');
    }
  };

const Sidebar: React.FC = () => {
  const [loginButton] = useState<boolean>(false)
  return (
    <div className="sidebar p-3  bg-dark">
      {/* Logo del Proyecto */}
      <a href="/" className="page-title d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="veterinet-icon.webp" alt="" />
        <span className="fs-4 fw-bold nav-title">Veteri.net.ar</span>
      </a>
      <a href="/" className="page-icon d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="logoPaginaChica.png" alt="" />
      </a>

      {/* Links de Navegación */}
      <ul className="link-buttons nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
            end
          >
            <FaHome size={20}/>
            <b>Inicio</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/veterinarias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaHospitalAlt size={20}/>
            <b>Veterinarias</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/profesionales" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaUserDoctor size={20}/>
            <b>Profesionales</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/calendario" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaRegCalendarAlt size={20}/>
            <b>Calendario</b>
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink 
            to="/noticias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaRegNewspaper size={20}/>
            <b>Noticias</b>
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink 
            to="/blogs" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaBlog size={20}/>
            <b>Blog</b>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/extraviados" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaSearch size={20}/>
            <b>Perdidos / Encontrados / En adopcion</b>
          </NavLink>
        </li>
      </ul>
      {loginButton && <UserZone />}
      <div className="media-buttons">
      <Link 
          
          to={'https://www.instagram.com/Veteri.net.ar.ar?utm_source=qr&igsh=b29qb3dlbmprYm51'}
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