
import { Button, Modal} from 'react-bootstrap';
import type { Establecimiento } from '../../pages/Veterinarias';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
type ModalProps = {
    obj: Establecimiento | null;
    show: boolean;
    hide: (val: boolean) => void
}

export const ModalDEestablecimiento = (props: ModalProps) => {
  const abrirWhatsApp = () => {
    if (props.obj?.telefono) {
      const telefonoLimpio = props.obj.telefono.replace(/\s/g, '').replace(/-/g, '');
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
          {props.obj && (
            <div>
              <pre style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
                
                <p>Horario: {props.obj.horario}</p>
                <p>Ubicacion: {props.obj.ubicacion}</p>
                {props.obj.urgencias  && <p>"Disponible para urgencias"</p>}
                <p>Especialidades: {props.obj.especialidades?.join('-')}</p>
                <p>Profesionales: {props.obj.profesionalesVinculados?.join('-')}</p>
                {/* <img src={props.obj.imagen} alt={props.obj.nombre} /> */}
              </pre>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
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
            className="d-flex align-items-center gap-2"
          >
            <FaEnvelope size={20} />
            Email
          </Button>
          
          {/* Botón Ubicación */}
          <Button 
            variant="danger" 
            onClick={abrirUbicacion}
            disabled={!props.obj?.ubicacion && !props.obj?.latitud && !props.obj?.longitud}
            className="d-flex align-items-center gap-2"
          >
            <FaMapMarkerAlt size={20} />
            Ubicación
          </Button>
        </Modal.Footer>
      </Modal>
  )
}