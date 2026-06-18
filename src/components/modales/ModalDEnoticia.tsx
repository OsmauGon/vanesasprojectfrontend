
import { Button, Modal} from 'react-bootstrap';
type ModalProps = {
    show: boolean;
    hide: (val: boolean) => void
}

export const ModalDEnoticia = (props: ModalProps) => {
  return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título de la Cita</Form.Label>
              <Form.Control type="text" placeholder="Ej: Revisión" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Form> */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, saepe molestias illo natus numquam commodi enim facere quos dolores voluptate pariatur exercitationem odio distinctio ducimus adipisci iusto inventore. Ipsam, est!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.hide(false)}>Cancelar</Button>
          <Button variant="primary" onClick={() => props.hide(false)}>Guardar</Button>
        </Modal.Footer>
      </Modal>
  )
}