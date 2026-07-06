import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { ModalDEprofesional } from '../components/modales/ModalDEprofesional';
import SwitchExample from '../components/SwitchExample';
import { fakeProfesionals, useProfesionals } from '../hooks/useProfesionalsData';
import type { Profesional } from '../types/usertype';




export const ProfesionalesOriginal: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [selectedProf,setSelectedProf] = useState<Profesional | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  const filteredProfesionales = fakeProfesionals.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Profesionales</h1>
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
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
                </Card.Text>

                <div className="d-grid gap-2">
                  <Button 
                    variant={prof.disponible ? "primary" : "secondary"}
                    disabled={!prof.disponible}
                    className='boton1'
                    onClick={() => {setShowModal(true); setSelectedProf(prof)}}
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
      <ModalDEprofesional show={showModal} hide={() => setShowModal(false)} obj={selectedProf} />
          
    </Container>
  );
};

type ProfesionalCardType = {
  info: Profesional, 
  setShowModal: (val :boolean) => void, 
  setSelectedProf: (prof: Profesional) => void
}
const ProfesionalCard = (info: ProfesionalCardType)=>{
  return (
    <Col key={info.info.id}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={info.info.imagen} 
                    alt={info.info.nombre}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div>
                    <Card.Title className="mb-0">{info.info.nombre}</Card.Title>
                    <small className="text-muted">{info.info.especialidad}</small>
                  </div>
                </div>
                

                <div className="d-grid gap-2">
                  <Button 
                    variant={info.info.disponible ? "primary" : "secondary"}
                    disabled={!info.info.disponible}
                    className='boton1'
                    onClick={() => {info.setShowModal(true); info.setSelectedProf(info.info)}}
                  >
                    {info.info.disponible ? "Ver Contacto" : "No Disponible"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  )
}
export const Profesionales2: React.FC = () => {
  
  const { data, error } = useProfesionals();
  const [busqueda, setBusqueda] = useState("");
  const [selectedProf,setSelectedProf] = useState<Profesional | null>(null)
  const [showModal, setShowModal] = useState(false);
  const [domicilio,setDomicilio] = useState<boolean>(false)
  
  useEffect(()=>{
    console.log("el useState camibio a ", "cargamos a los profesionales")
  },[domicilio])
  
  const filteredProfesionales = !domicilio ? data.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
    )
                                            : data.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidad.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
    ).filter(p => p.hacedomicilio === domicilio);
    
    const switches = [{
      etiqueta: "Visita domicilios",
      estado: domicilio,
      accion: setDomicilio
    }]

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Profesionales</h1>
        <Badge bg="secondary" pill>{filteredProfesionales.length} disponibles</Badge>
      </div>

      {/* Buscador */}
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar por nombre o ubicación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline-secondary">
          🔍
        </Button>
      </InputGroup>
      
        
                <SwitchExample switches={switches}/>  
      {/* Grid de Profesionales */}
      {error && <p>Lo siguientes perfiles son falsos e inventados</p>}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProfesionales.map((prof) => (
          <ProfesionalCard key={prof.id} info={prof} setShowModal={setShowModal} setSelectedProf={setSelectedProf}/>
        ))}
      </Row>

      {filteredProfesionales.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No se encontraron profesionales</h3>
        </div>
      )}
      <ModalDEprofesional show={showModal} hide={() => setShowModal(false)} obj={selectedProf} />
          
    </Container>
  );
};

export default Profesionales2;