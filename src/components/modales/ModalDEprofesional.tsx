
import { Button, Card, Modal, Badge} from 'react-bootstrap';
import type { Profesional } from '../../types/usertype';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
type ModalProps = {
    obj: Profesional | null;
    show: boolean;
    hide: (val: boolean) => void
}


export const ModalDEprofesional = (props: ModalProps) => {
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

  return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.obj?.nombre}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
                <Card.Text>
                  <strong>🐾 Especialidades:</strong> {masEspecialidades ? props.obj?.especialidad : props.obj?.practicas} <button onClick={()=> setMasEspecialidades(!masEspecialidades)}>{masEspecialidades ? "ver más" : "ver menos"}</button><br />
                  
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                <Card.Text>
                  <strong>🐾 Teléfono:</strong> {props.obj?.telefono}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong>🐾 Ubicación:</strong> {props.obj?.ubicacion}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong>🐾 Atencion:</strong> {props.obj?.horarioDEcontacto}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                {props.obj?.hacedomicilio  && <Badge bg="secondary" pill>Visita los domicilios</Badge>
                }
                {/* <img src={props.obj.imagen} alt={props.obj.nombre} /> */}
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
          className="d-flex align-items-center gap-2"
        >
          <FaEnvelope size={20} />
          Email
        </Button>
        </Modal.Footer>
      </Modal>
  )
}