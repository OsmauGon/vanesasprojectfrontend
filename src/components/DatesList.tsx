
import { Col, Card, ListGroup, Badge} from 'react-bootstrap';
import type { Cita } from '../pages/Calendario';
import '../styles/dateList.css'
import type { Event2 } from '../types/calendar-type';

type Props = {
    citas: Cita[]
}
type EventsProps = {
    citas: Event2[]
}


export const DatesListOriginal = ({citas}: Props) => {
    
      const getBadgeColor = (tipo: string) => {
        switch (tipo) {
          case 'consulta': return 'primary';
          case 'vacuna': return 'success';
          case 'cirujia': return 'danger';
          default: return 'secondary';
        }
      };
  return (
    <Col md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Header className="bg-primary text-white fondovioletaclaro">
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
  )
}
export const DatesList = ({citas}: Props) => {
    const getBadgeColor = (tipo: string) => {
        switch (tipo) {
          case 'consulta': return 'primary';
          case 'vacuna': return 'success';
          case 'cirujia': return 'danger';
          default: return 'secondary';
        }
      };
      
  return (
    <div className="date-list">
      <div className="date-list-title">
        <strong>Próximas Citas</strong>
      </div>
      <div className="date-list-content">
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
      </div>
    </div>
  )
}
export const DatesList2 = ({citas}: EventsProps) => {//borrar
  const getBadgeColor = (tipo: string) => {
        switch (tipo) {
          case 'consulta': return 'primary';
          case 'vacuna': return 'success';
          case 'cirujia': return 'danger';
          case 'castracion': return 'warning';
          default: return 'secondary';
        }
      };
      
  return (
    <div className="date-list">
      <div className="date-list-title">
        <strong>Próximas Citas</strong>
      </div>
      <div className="date-list-content">
        <ListGroup variant="flush">
        {citas.length > 0 ? (
            citas.slice(0,5).map((cita) => (
              <ListGroup.Item key={cita.id} action>
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <h6 className="mb-1">{cita.titulo}</h6>
                  <Badge bg={getBadgeColor(cita.tipo)}>{cita.tipo}</Badge>
                </div>
                <small className="text-muted">
                  📅 {cita.fecha} a las {cita.hora}
                </small><br />
                <small className="text-muted">
                  👨‍⚕️ {cita.responsable}
                </small>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No hay citas programadas</ListGroup.Item>
          )}
          </ListGroup>
      </div>
    </div>
  )
}

export default DatesList2