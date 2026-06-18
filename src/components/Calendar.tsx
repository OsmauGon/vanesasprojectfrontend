
import {Row, Col, Card, Button} from 'react-bootstrap';
import type { Cita } from '../pages/Calendario';
type Props = {
    citas: Cita[]
}

export const CalendarOriginal = (props: Props) => {
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


{/*
  Hola bot, para la mision de hoy debemos crear un componente de react para mi pagina de veterinarias. El componente padre pasara por medio de props una lista de "citas" que deben verse marcadas en el componente Calendar. Sabemos qie la lista de "citas" tiene el siguiente tipado: 
  export interface Cita {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: 'consulta' | 'vacuna' | 'cirujia';
  profesional: string;
  }
  El componente Calendar debera mostrar la cuadricula de dias marcando los dias correspondientes con las "citas" de la lista. El usuario debera poder navegar entre los meses de modo que podra ver los meses proximos y los pasados siempre dentro del mismo año
   */}
   // Calendar.tsx
import React, { useState, useMemo } from 'react';
import '../styles/calendar.css';



interface CalendarProps {
  citas: Cita[];
  onDateClick?: (fecha: string) => void; // Opcional: callback al hacer clic en un día
}

const Calendar: React.FC<CalendarProps> = ({ citas, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Obtener días con citas
  const diasConCitas = useMemo(() => {
    const diasMap = new Map<string, Cita[]>();
    
    citas.forEach(cita => {
      if (!diasMap.has(cita.fecha)) {
        diasMap.set(cita.fecha, []);
      }
      diasMap.get(cita.fecha)?.push(cita);
    });
    
    return diasMap;
  }, [citas]);

  // Navegación entre meses
  const cambiarMes = (incremento: number) => {
    const nuevaFecha = new Date(currentYear, currentMonth + incremento);
    setCurrentMonth(nuevaFecha.getMonth());
    setCurrentYear(nuevaFecha.getFullYear());
  };

  // Renderizar el calendario
  const renderCalendar = () => {
    const primerDia = new Date(currentYear, currentMonth, 1);
    const ultimoDia = new Date(currentYear, currentMonth + 1, 0);
    const diasEnMes = ultimoDia.getDate();
    const diaInicio = primerDia.getDay(); // 0 = Domingo, 1 = Lunes, etc.

    //const dias = [];
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Encabezados de días de la semana
    const encabezados = diasSemana.map(dia => (
      <div key={dia} className="calendar-header-cell">
        {dia}
      </div>
    ));

    // Espacios en blanco para el inicio del mes
    const espaciosBlanco = Array.from({ length: diaInicio }, (_, i) => (
      <div key={`empty-${i}`} className="calendar-day empty"></div>
    ));

    // Días del mes
    const diasDelMes = Array.from({ length: diasEnMes }, (_, i) => {
      const diaNumero = i + 1;
      const fechaStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(diaNumero).padStart(2, '0')}`;
      const citasDelDia = diasConCitas.get(fechaStr) || [];
      const hoy = new Date();
      const esHoy = hoy.getDate() === diaNumero && 
                    hoy.getMonth() === currentMonth && 
                    hoy.getFullYear() === currentYear;

      return (
        <div 
          key={diaNumero} 
          className={`calendar-day ${citasDelDia.length > 0 ? 'has-citas' : ''} ${esHoy ? 'today' : ''}`}
          onClick={() => onDateClick && onDateClick(fechaStr)}
        >
          <span className="day-number">{diaNumero}</span>
          {citasDelDia.length > 0 && (
            <div className="citas-indicators">
              {citasDelDia.map((cita, index) => (
                <span 
                  key={index} 
                  className={`cita-dot ${cita.tipo}`}
                  title={`${cita.titulo} - ${cita.hora} - ${cita.profesional}`}
                ></span>
              ))}
            </div>
          )}
          {citasDelDia.length > 0 && (
            <div className="citas-count">{citasDelDia.length}</div>
          )}
        </div>
      );
    });

    return [...encabezados, ...espaciosBlanco, ...diasDelMes];
  };

  // Obtener nombre del mes
  const nombreMes = new Date(currentYear, currentMonth).toLocaleString('es-ES', { month: 'long' });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => cambiarMes(-1)} className="nav-button">
          ←
        </button>
        <h2 className="month-title">
          {nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)} {currentYear}
        </h2>
        <button onClick={() => cambiarMes(1)} className="nav-button">
          →
        </button>
      </div>

      <div className="calendar-legend">
        <span className="legend-item">
          <span className="legend-dot consulta"></span> Consulta
        </span>
        <span className="legend-item">
          <span className="legend-dot vacuna"></span> Vacuna
        </span>
        <span className="legend-item">
          <span className="legend-dot cirujia"></span> Cirugía
        </span>
      </div>

      <div className="calendar-grid">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;