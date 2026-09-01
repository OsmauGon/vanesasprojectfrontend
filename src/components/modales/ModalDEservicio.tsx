
import { Button, Card, Modal} from 'react-bootstrap';
import { FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import '../../styles/modalStyles.css'
import type { Service } from '../../types/service-type';
type ModalProps = {
    obj: Service | null;
    show: boolean;
    hide: (val: boolean) => void
}


export const ModalDEService = (props: ModalProps) => {
  console.log(props)
  //const [masEspecialidades,setMasEspecialidades] = useState<boolean>(true)
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
  /* const abrirEmail = () => {
    if (props.obj?.email) {
      window.open(`mailto:${props.obj.email}`, '_blank');
    }
  }; */
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
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Topico:</strong> {props.obj?.topico}<br />
                  
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Teléfono:</strong> {props.obj?.telefono}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Descripcion:</strong> {props.obj?.descripcion}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Responsable:</strong> {props.obj?.contacto}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>
                
                <Card.Text className={`${(props.obj && props.obj?.notas && props.obj?.notas.length > 0) ? "" : "d-none"}`}>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Notas:</strong> {props.obj?.notas}<br />
                </Card.Text>
                
          </Modal.Body>
        <Modal.Footer>
          <Button 
          
          variant={props.obj?.telefono ? "primary" : "secondary"} 
          title={props.obj?.telefono ? "Enviar Correo" : "No disponible"}
          
          onClick={abrirWhatsApp}
          className="d-flex align-items-center gap-2"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </Button>
        
        {/* <Button 
          disabled={props.obj?.email ? true : false}
          variant={props.obj?.email ? "primary" : "secondary"} 
          title={props.obj?.email ? "Enviar Correo" : "No disponible"}
          onClick={abrirEmail}
          className={`${(props.obj && props.obj?.email) ? "d-flex align-items-center gap-2" : "d-none"}`}
        >
          <FaEnvelope size={20} />
          Email
        </Button> */}
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