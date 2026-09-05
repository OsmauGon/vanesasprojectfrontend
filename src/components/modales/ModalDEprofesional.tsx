
import { Button, Card, Modal, Badge} from 'react-bootstrap';
import type { Profesional } from '../../types/usertype';
import { FaEnvelope, FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import '../../styles/modalStyles.css'
type ModalProps = {
    obj: Profesional | null;
    show: boolean;
    hide: (val: boolean) => void
}


export const ModalDEprofesional = (props: ModalProps) => {
  console.log(props)
  const [masEspecialidades,setMasEspecialidades] = useState<boolean>(true)
  const abrirWhatsApp = () => {
    if (props.obj?.telefono) {
      // Limpiar el número (eliminar espacios, guiones, etc.)
      const telefonoLimpio = props.obj.telefono.replace(/\s/g, '').replace(/-/g, '');
      // Si el número no tiene código de país, agregar +54 (Argentina) como ejemplo
      const telefonoCompleto = telefonoLimpio.startsWith('+') 
        ? telefonoLimpio 
        : `+54${telefonoLimpio}`;
      
      window.open(`https://wa.me/${telefonoCompleto}`, '_blank');
    }
  };

  // Función para abrir Email
  const abrirEmail = () => {
    if (props.obj?.email) {
      window.open(`mailto:${props.obj.email}`, '_blank');
    }
  };
  const abrirRed =()=> {
    if (props.obj?.redSocial) {
      window.open(props.obj.redSocial, '_blank');
    }
  }

  return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.obj?.nombre}</Modal.Title>
        </Modal.Header>
          <Modal.Body >
              
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Especialidades:</strong> {masEspecialidades ? props.obj?.servicios[0] : props.obj?.servicios} <button onClick={()=> setMasEspecialidades(!masEspecialidades)}>{masEspecialidades ? "ver más" : "ver menos"}</button><br />
                  
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Teléfono:</strong> {props.obj?.telefono}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Ubicación:</strong> {props.obj?.ubicacion}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Atencion:</strong> {props.obj?.horario}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                
                {(props.obj && props.obj.notas.length > 0) && 
                <Card.Text className={`${(props.obj && props.obj?.notas.length > 0) ? "" : "d-none"}`}>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Notas:</strong> {props.obj?.notas.join(' - ')}<br />
                </Card.Text>
                }
                
                {(props.obj && props.obj.insignias.length > 0) && <h5>Servicios</h5>}
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  {props.obj?.insignias.includes("haceurgencias") && <Badge bg="secondary" pill>Atiende Urgenicas </Badge>}
                  {props.obj?.insignias.includes("hacevicitas")  && <Badge bg="secondary" pill>Tiene Laboratorio </Badge>}
                </div>
          </Modal.Body>
        <Modal.Footer>
          <Button 
          disabled={props.obj?.telefono ? true : false}
          variant={props.obj?.telefono ? "primary" : "secondary"} 
          title={props.obj?.telefono ? "Enviar Correo" : "No disponible"}
          
          onClick={abrirWhatsApp}
          className="d-flex align-items-center gap-2"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </Button>
        
        <Button 
          disabled={props.obj?.email ? true : false}
          variant={props.obj?.email ? "primary" : "secondary"} 
          title={props.obj?.email ? "Enviar Correo" : "No disponible"}
          onClick={abrirEmail}
          className={`${(props.obj && props.obj?.email) ? "d-flex align-items-center gap-2" : "d-none"}`}
        >
          <FaEnvelope size={20} />
          Email
        </Button>
        {/* Botón Red Social */}
                  <Button 
                    variant="primary" 
                    onClick={abrirRed}
                    className={`${(props.obj && props.obj?.redSocial) ? "d-flex align-items-center gap-2" : "d-none"}`}
                  >
                    <FaShareAlt size={20} />
                    Red Social
                  </Button>
        </Modal.Footer>
      </Modal>
  )
}