import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { ModalDEestablecimiento } from '../components/modales/ModalDEestablecimiento';

export interface Establecimiento {
  id: number;
  nombre: string;
  especialidad: string;
  rating: number;
  disponible: boolean;
  imagen: string;
    telefono?: string;
    email?: string;
    ubicacion: string;
    latitud?: number;
    longitud?: number;
    horario?: string;
    especialidades?: string[]
}

// Datos de ejemplo
/* const establecimiento :Establecimiento = {
  id: 0,
  rating: 0,
  disponible: true,
  imagen: "******************",
    nombre: 'Veterinaria San Martín',
    telefono: '3511234567',
    email: 'info@veterinariasanmartin.com',
    ubicacion: 'Av. San Martín 1234, Córdoba, Argentina',
    latitud: -31.4201,
    longitud: -64.1888,
    horario: 'Lunes a Sábado 8:00 - 20:00',
    especialidad: "cirujia",
    especialidades: ['Perros', 'Gatos', 'Exóticos']
  }; */
const establecimientosData: Establecimiento[] = [
  { id: 1, nombre: "El club de las mascotas", especialidad: "Medicina General", ubicacion: "Santiago del Estero 1234", rating: 4.8, disponible: true, imagen: "img/elclub.jpg", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
  { id: 2, nombre: "Animales Sueltos", especialidad: "Cirugía Veterinaria", ubicacion: "Las Condes 5678", rating: 4.9, disponible: true, imagen: "img/animalessueltos.jpg", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
  { id: 3, nombre: "All Pets", especialidad: "Odontología", ubicacion: "Providencia 9101", rating: 4.6, disponible: false, imagen: "img/allpets.png", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
  { id: 4, nombre: "Kidogo", especialidad: "Medicina General", ubicacion: "Ñuñoa 1121", rating: 4.7, disponible: true, imagen: "img/kidogo.jpg", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
  { id: 5, nombre: "Maule Sur", especialidad: "Dermatología", ubicacion: "Vitacura 3141", rating: 4.9, disponible: true, imagen: "img/maulesur.png", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
  { id: 6, nombre: "Vet-Can", especialidad: "Cardiología", ubicacion: "Gascon 5161", rating: 4.8, disponible: false, imagen: "img/vetcan.png", telefono:"1234567891011", email: "emailfalsogmail.com", latitud: 123456789, longitud: 123456789 },
];

const Veterinarias: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [selectedPlace,setSelectedPlace] = useState<Establecimiento | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  const filteredEstablecimientos = establecimientosData.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Veterinarias</h1>
        <Badge bg="secondary" pill>{filteredEstablecimientos.length} disponibles</Badge>
      </div>

      {/* Buscador */}
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar por nombre, especialidad o ubicación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline-secondary">
          🔍
        </Button>
      </InputGroup>

      {/* Grid de Veterinarias */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredEstablecimientos.map((prof) => (
          <Col key={prof.id}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={prof.imagen} 
                    alt={prof.nombre}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div>
                    <Card.Title className="mb-0">{prof.nombre}</Card.Title>
                    <small className="text-muted">{prof.especialidad}</small>
                  </div>
                </div>
                
                <Card.Text>
                  <strong>📍 Ubicación:</strong> {prof.ubicacion}<br />
                  <strong>⭐ Rating:</strong> {prof.rating}/5
                </Card.Text>

                <div className="d-grid gap-2">
                  <Button 
                    variant={prof.disponible ? "primary" : "secondary"}
                    disabled={!prof.disponible}
                    className='boton1'
                    onClick={() => {setShowModal(true); setSelectedPlace(prof)}}
                  >
                    {prof.disponible ? "Visitar" : "No Disponible"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredEstablecimientos.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No se encontraron Veterinarias</h3>
        </div>
      )}
      <ModalDEestablecimiento show={showModal} hide={() => setShowModal(false)} obj={selectedPlace}/>
          
    </Container>
  );
};

export default Veterinarias;