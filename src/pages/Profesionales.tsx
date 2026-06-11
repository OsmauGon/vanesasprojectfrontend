import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';

interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
  ubicacion: string;
  rating: number;
  disponible: boolean;
  imagen: string;
}

// Datos de ejemplo
const profesionalesData: Profesional[] = [
  { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Medicina General", ubicacion: "Santiago del Estero 1234", rating: 4.8, disponible: true, imagen: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, nombre: "Dra. María González", especialidad: "Cirugía Veterinaria", ubicacion: "Las Condes 5678", rating: 4.9, disponible: true, imagen: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, nombre: "Dr. Carlos López", especialidad: "Odontología", ubicacion: "Providencia 9101", rating: 4.6, disponible: false, imagen: "https://randomuser.me/api/portraits/men/64.jpg" },
  { id: 4, nombre: "Dra. Ana Martínez", especialidad: "Medicina General", ubicacion: "Ñuñoa 1121", rating: 4.7, disponible: true, imagen: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, nombre: "Dr. Roberto Sánchez", especialidad: "Dermatología", ubicacion: "Vitacura 3141", rating: 4.9, disponible: true, imagen: "https://randomuser.me/api/portraits/men/85.jpg" },
  { id: 6, nombre: "Dra. Laura Torres", especialidad: "Cardiología", ubicacion: "Gascon 5161", rating: 4.8, disponible: false, imagen: "https://randomuser.me/api/portraits/women/12.jpg" },
];

const Profesionales: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");

  const filteredProfesionales = profesionalesData.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Profesionales</h1>
        <Badge bg="secondary" pill>{filteredProfesionales.length} disponibles</Badge>
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

      {/* Grid de Profesionales */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProfesionales.map((prof) => (
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
                  >
                    {prof.disponible ? "Ver Contacto" : "No Disponible"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredProfesionales.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No se encontraron profesionales</h3>
        </div>
      )}
    </Container>
  );
};

export default Profesionales;