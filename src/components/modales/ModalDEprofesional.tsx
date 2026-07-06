
import { Button, Card, Modal, Badge} from 'react-bootstrap';
import type { Profesional } from '../../types/usertype';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
type ModalProps = {
    obj: Profesional | null;
    show: boolean;
    hide: (val: boolean) => void
}


export const ModalDEprofesional = (props: ModalProps) => {
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
                  <strong>📍 Especialidad:</strong> {props.obj?.especialidad}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                <Card.Text>
                  <strong>📍 Practicas:</strong> {props.obj?.practicas?.join(' - ')}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                <Card.Text>
                  <strong>📍 Teléfono:</strong> {props.obj?.telefono}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong>📍 Ubicación:</strong> {props.obj?.ubicacion}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                {props.obj?.hacedomicilio  && <Badge bg="secondary" pill>Visita los domicilios</Badge>
                }
                {/* <img src={props.obj.imagen} alt={props.obj.nombre} /> */}
          </Modal.Body>
        <Modal.Footer>
          <Button 
          variant="success" 
          onClick={abrirWhatsApp}
          className="d-flex align-items-center gap-2"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </Button>
        
        <Button 
          variant="primary" 
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