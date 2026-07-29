import React, { useState } from 'react';
import { Container, Row, Button} from 'react-bootstrap';
import { ModalDEcalendario } from '../components/modales/ModalDEcalendario';
import Calendar, { Calendar2 } from '../components/Calendar';
import DatesList2, {DatesList} from '../components/DatesList';
import type { Event2 } from '../types/calendar-type';
import { useEvents } from '../hooks/useCalendarData';
import BannerDEpublicidad from '../components/BannerDEpublicidad';

export interface Cita {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  tipo: 'consulta' | 'vacuna' | 'cirujia';
  profesional: string;
}

// Datos de ejemplo (días del mes actual simulados)
const citasIniciales: Cita[] = [
  { id: 1, titulo: "Revisión General", fecha: "2026-01-15", hora: "10:00", tipo: "consulta", profesional: "Dr. Juan Pérez" },
  { id: 2, titulo: "Vacuna Antirrábica", fecha: "2026-02-15", hora: "11:30", tipo: "vacuna", profesional: "Dra. María González" },
  { id: 3, titulo: "Limpieza Dental", fecha: "2026-03-20", hora: "14:00", tipo: "cirujia", profesional: "Dr. Carlos López" },
  { id: 4, titulo: "Chequeo Mensual", fecha: "2026-04-25", hora: "09:00", tipo: "consulta", profesional: "Dr. Roberto Sánchez" },
];

export const CalendarioOriginal: React.FC = () => {
  const [citas] = useState<Cita[]>(citasIniciales);
  const [showModal, setShowModal] = useState(false);

   const handleDateClick = (fecha: string) => {
    const citasDelDia = citas.filter(cita => cita.fecha === fecha);
    console.log(`📅 Citas para ${fecha}:`, citasDelDia);
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Calendario de Citas</h1>
        
      </div>
      <BannerDEpublicidad />
      <Row>
        {/* Vista de listado de citas próximas */}
        <DatesList citas={citas}/>

        {/* Calendario Visual (mes de ejemplo) */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Calendar citas={citas} onDateClick={handleDateClick} />
        </div>
      </Row>

      {/* Modal de nueva cita (Placeholder) */}
      
      <ModalDEcalendario show={showModal} hide={() => setShowModal(false)} obj={null}/>
    </Container>
  );
};


const Calendario: React.FC = () => {
  const { data, error } = useEvents();
  const [selectedEvent,setSelectedEvent] = useState<Event2[] | null>(null)
  const [showModal, setShowModal] = useState(false);
    
  const handleDateClick = (fecha: string) => { //esta funcion debe llamar al modal
    const eventos = data.filter(i=> i.fecha === fecha)
    if(eventos.length != 0){
      setSelectedEvent(eventos)
      setShowModal(true)
    }
  };

  return (
    <Container className="py-4">
      {error && <p>Lo siguientes perfiles son falsos e inventados</p>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Calendario de Citas</h1>
        {false && <Button variant="primary" 
                    className='boton1' 
                    onClick={() => setShowModal(true)}>
                    + Nueva Cita
                  </Button>
        }
      </div>

      <Row>
        {/* Vista de listado de citas próximas */}
        <DatesList2 citas={data}/>

        {/* Calendario Visual (mes de ejemplo) */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Calendar2 citas={data} onDateClick={handleDateClick} />
        </div>
      </Row>

      {/* Modal eventos (Placeholder) */}
      <ModalDEcalendario show={showModal} hide={() => setShowModal(false)} obj={selectedEvent} />
    </Container>
  );
};

export default Calendario;