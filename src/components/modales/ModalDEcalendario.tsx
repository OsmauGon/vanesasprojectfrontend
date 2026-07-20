
import { Modal, Card} from 'react-bootstrap';
import type { Event2 } from '../../types/calendar-type';
type ModalProps = {
    show: boolean;
    hide: (val: boolean) => void
    obj: Event2[] | null
}

export const ModalDEcalendario = (props: ModalProps) => {
  return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.obj?.map(item =>(
            <>
              <div key={item.id} className="evento">
                {/* <p>{item.titulo}</p>
                <p>{item.tipo}</p>
                <p>{item.contacto}</p>
                <p>{item.fecha}</p>
                <p>{item.ubicacion}</p>
                <p>{item.hora}</p> */}
                <Card.Text>
                  <strong>🐾 ¿Qué es?:</strong> {item.titulo}<br />
                </Card.Text>
                <Card.Text>
                  <strong>🐾 ¿Tópico?:</strong> {item.tipo}<br />
                </Card.Text>
                <Card.Text>
                  <strong>🐾 ¿Cuando?:</strong>El {item.fecha} a las {item.hora}<br />
                </Card.Text>
                <Card.Text>
                  <strong>🐾 ¿Donde?:</strong> {item.ubicacion}<br />
                </Card.Text>
                <Card.Text>
                  <strong>🐾 ¿Quien?: <a href={item.contacto} target="_blank" rel="noopener noreferrer">Ver Contacto</a></strong><br />
                </Card.Text>
              </div>
              <hr />
            </>
          ))}
        </Modal.Body>
      </Modal>
  )
}