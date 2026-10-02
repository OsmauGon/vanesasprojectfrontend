import React, { useState, type ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserZone } from './UserZone';
import '../styles/sidebar.css'
import '../styles/minisidebar.css'
import { FaEnvelope, FaInstagram, FaUserDoctor } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
//import { FaRegNewspaper } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";  

//https://react-icons.github.io/react-icons/
// Función para abrir Email
  const abrirEmail = () => {
    if (true) {
      window.open(`mailto:Veteri.net.ar.ar@gmail.com`, '_blank');
    }
  };

  
  type Enlace ={
    name?:string;
    dir: string;
    func?: ()=>void;
    icon: ReactElement
  }
  const enlaces: Enlace[] = [
    {
      name: "Inicio",
      dir: "/",
      icon: <FaHome size={20}/>
    },
    {
      name: "Veterinarias",
      dir: "/veterinarias",
      icon: <FaHospitalAlt size={20}/>
    },
    {
      name: "Profesionales",
      dir: "/profesionales",
      icon: <FaUserDoctor size={20}/>
    },
    {
      name: "Servicios / Productos",
      dir: "/servicios",
      icon: <MdProductionQuantityLimits size={20}/>
    },
    {
      name: "Calendario",
      dir: "/calendario",
      icon: <FaRegCalendarAlt size={20}/>
    },
    {
      name: "Blogs",
      dir: "/blogs",
      icon: <FaBlog size={20}/>
    },
    {
      name: "Perdidos / Encontrados / En adopcion",
      dir: "/extraviados",
      icon: <FaSearch size={20}/>
    },
  ]
const Sidebar: React.FC = () => {
  const [loginButton] = useState<boolean>(false)
  return (
    <div className="sidebar p-3  bg-dark">
      {/* Logo del Proyecto */}
      <a href="/" className="page-title d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="img/Recurso 13-8.png" alt="" />
        <span className="fs-4 fw-bold nav-title">Veteri.net.ar</span>
      </a>
      <a href="/" className="page-icon d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="logoPaginaChica.png" alt="" />
      </a>

      {/* Links de Navegación */}
      <ul className="link-buttons nav nav-pills flex-column">
        {enlaces.map(item => (
          <li key={item.dir} className="nav-item ">
          <NavLink 
            to={item.dir} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
            end
          >
            {item.icon}
            <b>{item.name}</b>
          </NavLink>
        </li>
        ))}
        {/* <li className="nav-item">
          <NavLink 
            to="/noticias" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            <FaRegNewspaper size={20}/>
            <b>Noticias</b>
          </NavLink>
        </li> */}
      </ul>
      {loginButton && <UserZone />}
      <div className="media-buttons">
      <Link 
          
          to={'https://www.instagram.com/Veteri.net.ar?utm_source=qr&igsh=b29qb3dlbmprYm51'}
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

export const Minisidebar: React.FC =()=>{
  
  return (
    
      <div className="minisidebar bg-dark">
      <a href="/" className="minisidebar-a">
        <img src="logoPaginaChica.png" alt="" />
      </a>
        <ul className="minisidebar-ul link-buttons nav nav-pills ">
        {enlaces.map(item => (
          <li key={item.dir} className="nav-item ">
          <NavLink 
            to={item.dir} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-white'}`}
          >
            {item.icon}
            
          </NavLink>
        </li>
        ))}
      </ul>
      <div className="media-buttons">
      <Link 
          
          to={'https://www.instagram.com/Veteri.net.ar?utm_source=qr&igsh=b29qb3dlbmprYm51'}
          target='_blank'
          className="d-flex align-items-center gap-2"
          title='Ir al Instagram'
        >
        <FaInstagram size={30} color='rgb(127,105,154)'/>
        </Link>
      <Link 
          to={'#'}
          onClick={abrirEmail}
          className="d-flex align-items-center gap-2"
          title='Enviar correo'
        >
          <FaEnvelope size={30} color='rgb(127,105,154)'/>
        </Link>
      </div>
      </div>
  )
}

export default Sidebar;