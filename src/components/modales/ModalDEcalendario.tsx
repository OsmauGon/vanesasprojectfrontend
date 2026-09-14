
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
          <Modal.Title>Para este dia tenemos...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.obj?.map(item =>(
            <>
              <div key={item.id} className="evento">
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Qué es?:</strong> {item.titulo}<br />
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Tópico?:</strong> {item.tipo}<br />
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Cuando?:</strong>El {item.fecha} a las {item.hora}<br />
                </Card.Text>
                <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Donde?:</strong> {item.ubicacion}<br />
                </Card.Text>

                {item.responsable && <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Quien propone?: {item.responsable}</strong><br />
                </Card.Text>}

                {item.contacto && <Card.Text>
                  <strong><img src="img/Recurso 16-8.png" alt="" /> ¿Ver mas?: <a href={item.contacto} target="_blank" rel="noopener noreferrer">Ver Contacto</a></strong><br />
                </Card.Text>}
              </div>
              <hr />
            </>
          ))}
        </Modal.Body>
      </Modal>
  )
}