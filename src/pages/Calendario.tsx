import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, Button, Modal, Form } from 'react-bootstrap';

interface Cita {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: 'consulta' | 'vacuna' | 'cirujia';
  profesional: string;
}

// Datos de ejemplo (días del mes actual simulados)
const citasIniciales: Cita[] = [
  { id: 1, titulo: "Revisión General", fecha: "2024-01-15", hora: "10:00", tipo: "consulta", profesional: "Dr. Juan Pérez" },
  { id: 2, titulo: "Vacuna Antirrábica", fecha: "2024-01-15", hora: "11:30", tipo: "vacuna", profesional: "Dra. María González" },
  { id: 3, titulo: "Limpieza Dental", fecha: "2024-01-20", hora: "14:00", tipo: "cirujia", profesional: "Dr. Carlos López" },
  { id: 4, titulo: "Chequeo Mensual", fecha: "2024-01-25", hora: "09:00", tipo: "consulta", profesional: "Dr. Roberto Sánchez" },
];

const Calendario: React.FC = () => {
  const [citas] = useState<Cita[]>(citasIniciales);
  const [showModal, setShowModal] = useState(false);

  const getBadgeColor = (tipo: string) => {
    switch (tipo) {
      case 'consulta': return 'primary';
      case 'vacuna': return 'success';
      case 'cirujia': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Calendario de Citas</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          + Nueva Cita
        </Button>
      </div>

      <Row>
        {/* Vista de listado de citas próximas */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <strong>Próximas Citas</strong>
            </Card.Header>
            <ListGroup variant="flush">
              {citas.length > 0 ? (
                citas.map((cita) => (
                  <ListGroup.Item key={cita.id} action>
                    <div className="d-flex w-100 justify-content-between align-items-start">
                      <h6 className="mb-1">{cita.titulo}</h6>
                      <Badge bg={getBadgeColor(cita.tipo)}>{cita.tipo}</Badge>
                    </div>
                    <small className="text-muted">
                      📅 {cita.fecha} a las {cita.hora}
                    </small><br />
                    <small className="text-muted">
                      👨‍⚕️ {cita.profesional}
                    </small>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No hay citas programadas</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>

        {/* Calendario Visual (mes de ejemplo) */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Button variant="outline-secondary" size="sm">←</Button>
              <h4 className="mb-0">Enero 2024</h4>
              <Button variant="outline-secondary" size="sm">→</Button>
            </Card.Header>
            <Card.Body>
              {/* Encabezados de días */}
              <Row className="text-center fw-bold mb-2">
                <Col>Dom</Col><Col>Lun</Col><Col>Mar</Col><Col>Mié</Col><Col>Jue</Col><Col>Vie</Col><Col>Sáb</Col>
              </Row>
              
              {/* Días del mes (simulado) - Una cuadrícula simple */}
              <div className="calendar-grid">
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNumber = i - 3; // Empezando el día 1 en posición 4 (miércoles)
                  const hasEvent = citas.some(c => new Date(c.fecha).getDate() === dayNumber && dayNumber > 0);
                  
                  return (
                    <div 
                      key={i}
                      className={`calendar-day p-2 border ${dayNumber < 1 || dayNumber > 31 ? 'text-muted bg-light' : ''} ${hasEvent ? 'bg-info bg-opacity-10' : ''}`}
                      style={{ minHeight: '60px', cursor: 'pointer' }}
                    >
                      {dayNumber > 0 && dayNumber <= 31 && (
                        <>
                          <strong>{dayNumber}</strong>
                          {hasEvent && <div className="dot bg-primary rounded-circle d-inline-block ms-1" style={{width: '6px', height: '6px'}}></div>}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal de nueva cita (Placeholder) */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Calendario;