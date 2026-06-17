
import {Row, Col, Card, Button} from 'react-bootstrap';
import type { Cita } from '../pages/Calendario';
type Props = {
    citas: Cita[]
}

const Calendar = (props: Props) => {
  return (
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
                  <div className="a" style={{ height: '500px', overflow: "auto" }}>
                    {Array.from({ length: 35 }, (_, i) => {
                      const dayNumber = i - 3; // Empezando el día 1 en posición 4 (miércoles)
                      const hasEvent = props.citas.some(c => new Date(c.fecha).getDate() === dayNumber && dayNumber > 0);
                      
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
  )
}

export default Calendar