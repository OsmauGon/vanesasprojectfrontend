
import { Col, Card, ListGroup, Badge} from 'react-bootstrap';
import type { Cita } from '../pages/Calendario';
import '../styles/dateList.css'
import type { Event } from '../types/calendar-type';

type Props = {
    citas: Cita[]
}
type EventsProps = {
    eventos: Event[]
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
export const DatesList2 = ({eventos}: EventsProps) => {
  const hoy = new Date();
  /* const proximosSiete: Event[] = eventos
    .filter(evento => new Date(evento.fecha) >= hoy)
    .sort((a,b)=> {
      return new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    })
    .slice(0,7)
  
  */
  const getBadgeColor = (tipo: string) => {
        switch (tipo) {
          case 'consulta': return 'primary';
          case 'vacuna': return 'success';
          case 'cirujia': return 'danger';
          default: return 'secondary';
        }
      };
  type fechitas = {
    evento: string;
    fecha: string;
    fechaDate: Date;

  }
  const proximasFechas = eventos
  .flatMap(evento => 
    evento.fecha.map(fecha => ({
      evento: evento.titulo,
      fecha,
      fechaDate: new Date(fecha)
    }))
  )
  .filter((item: fechitas) => item.fechaDate >= hoy)
  .sort((a,b)=> a.fechaDate.getTime() - b.fechaDate.getTime())
  .slice(0,7)
  console.log(proximasFechas)




  return (
    <div className="date-list">
      <div className="date-list-title">
        <strong>Próximas Citas</strong>
      </div>
      <div className="date-list-content">
        <ListGroup variant="flush">
        {eventos.length > 0 ? (
            eventos.map((cita) => (
              <ListGroup.Item key={cita.id} action>
                <div className="d-flex w-100 justify-content-between align-items-start">
                  <h6 className="mb-1">{cita.titulo}</h6>
                  <Badge bg={getBadgeColor(cita.tipo)}>{cita.tipo}</Badge>
                </div>
                <small className="text-muted">
                  📅 {cita.fecha} a las {cita.hora}
                </small><br />
                <small className="text-muted">
                  👨‍⚕️ {cita.contacto}
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