import React, { useState } from 'react'
import '../styles/arisemenu.css'

type LogedUserProps = {
    logout: (val:false) => void;
}
type Props = {}

const UserLoged = ({logout} : LogedUserProps) => {
    return (
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="rounded-circle me-2" style={{width: '32px', height: '32px', backgroundColor: '#adb5bd'}}></div>
          <strong>Mi Perfil</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">Configuración</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#" onClick={()=> logout}>Cerrar sesión</a></li>
        </ul>
      </div>
  )
}

const UserLoged2 = ({logout} : LogedUserProps) => {
    const [close,setClose] = useState<boolean>(false)
    return (
        <>
            <hr />
              <div className={`arisemenu ${close ? 'close' : ''}`}>
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="rounded-circle me-2" style={{width: '32px', height: '32px', backgroundColor: '#adb5bd'}}></div>
                <strong onClick={()=> setClose(!close)}>Mi Perfil</strong>
                </a>
                <ul className='arisemenu-list'>
                <li><a className="dropdown-item" href="#">Configuración</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={()=> {logout(false)}}>Cerrar sesión</a></li>
                </ul>
            </div>
        </>
      
  )
}


export const UserZone = (props: Props) => {
    const [user,setUser] = useState<boolean>(false)
  return (
    <>{user ? <UserLoged2 logout={setUser}/> 
            : <button 
                className='btn btn-primary' 
                onClick={()=>{setUser(true)}}
                >Ingresar
                </button>
        }
    </>
  )
}
