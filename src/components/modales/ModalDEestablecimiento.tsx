
import { Badge, Button, Card, Modal} from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaShareAlt } from "react-icons/fa";
import type { Establishment } from '../../types/establishment-type';
type ModalProps = {
    obj: Establishment | null;
    show: boolean;
    hide: (val: boolean) => void
}

export const ModalDEestablecimiento = (props: ModalProps) => {
  const abrirRed =()=> {
    if (props.obj?.redSocial) {
      window.open(props.obj.redSocial, '_blank');
    }
  }
  const abrirWhatsApp = () => {
    if (props.obj?.telefono) {
      const telefonoLimpio = props.obj.telefono[0].replace(/\s/g, '').replace(/-/g, '');
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

  // Función para abrir Ubicación en Google Maps
  const abrirUbicacion = () => {
    let url = 'https://www.google.com/maps/search/?api=1&';
    
    if (props.obj?.latitud && props.obj?.longitud) {
      // Si tenemos coordenadas exactas
      url += `query=${props.obj.latitud},${props.obj.longitud}`;
    } else if (props.obj?.ubicacion) {
      // Si tenemos dirección, la codificamos para URL
      url += `query=${encodeURIComponent(props.obj.ubicacion)}`;
    } else {
      // Si no hay datos, usar el nombre como búsqueda
      url += `query=${encodeURIComponent(props.obj?.nombre || 'Veterinaria')}`;
    }
    
    window.open(url, '_blank');
  };
  return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.obj?.nombre}</Modal.Title>
        </Modal.Header>
         <Modal.Body>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Especialidades:</strong> {props.obj?.servicios?.join(' - ')}<br />
                </Card.Text>
                <Card.Text  className={`${(props.obj && props.obj?.notas.length > 0) ? "" : "d-none"}`}>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Teléfono:</strong> {props.obj?.telefono.join(' - ')}<br />
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Ubicación:</strong> {props.obj?.ubicacion}<br />
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Horario:</strong> {props.obj?.horario}<br />
                </Card.Text>
                <Card.Text className={`${(props.obj && props.obj?.profesionalesVinculados.length > 0) ? "" : "d-none"}`}>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Profesionales:</strong> {props.obj?.profesionalesVinculados.join(' - ')}<br />
                </Card.Text>
                {(props.obj && props.obj.notas.length > 0) && 
                <Card.Text className={`${(props.obj && props.obj?.notas.length > 0) ? "" : "d-none"}`}>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> Notas:</strong> {props.obj?.notas.join(' - ')}<br />
                </Card.Text>
                }
                
                {(props.obj && props.obj.insignias.length > 0) && <h5>Servicios</h5>}
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                {props.obj?.insignias.includes("haceurgencias") && <Badge bg="secondary" pill>Atiende Urgenicas </Badge>}
                {props.obj?.insignias.includes("tienelaboratorio")  && <Badge bg="secondary" pill>Tiene Laboratorio </Badge>}
                {props.obj?.insignias.includes("tienepeluqueria")  && <Badge bg="secondary" pill>Tiene Peluqueria </Badge>}
                {props.obj?.insignias.includes("tienepetshop")  && <Badge bg="secondary" pill>Tiene Petshop </Badge>}
                {props.obj?.insignias.includes("tienequirofano")  && <Badge bg="secondary" pill>Tiene Quirofano </Badge>}
                </div>
                {/* <img src={props.obj.imagen} alt={props.obj.nombre} /> */}
          </Modal.Body>
        <Modal.Footer>
            {/* Whatsap */}
            <Button 
            variant="success" 
            onClick={abrirWhatsApp}
            disabled={!props.obj?.telefono}
            className="d-flex align-items-center gap-2"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </Button>
          
          {/* Botón Email */}
          <Button 
            variant="primary" 
            onClick={abrirEmail}
            disabled={!props.obj?.email}
            className={`${(props.obj && props.obj?.email) ? "d-flex align-items-center gap-2" : "d-none"}`}
          >
            <FaEnvelope size={20} />
            Email
          </Button>
          
          {/* Botón Ubicación */}
          <Button 
            variant="danger" 
            onClick={abrirUbicacion}
            disabled={!props.obj?.ubicacion && !props.obj?.latitud && !props.obj?.longitud}
            className={`${(props.obj && props.obj?.latitud && props.obj?.longitud) ? "d-flex align-items-center gap-2" : "d-none"}`}
          >
            <FaMapMarkerAlt size={20} />
            Ubicación
          </Button>
          {/* Botón Red Social */}
          <Button 
            variant="warning" 
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