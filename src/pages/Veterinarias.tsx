import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { ModalDEestablecimiento } from '../components/modales/ModalDEestablecimiento';
import SwitchExample from '../components/SwitchExample';
import type { Establishment } from '../types/establishment-type';
import { useEstablishments } from '../hooks/useEstablishmentData';



export const VeterinariasOriginal: React.FC = () => {
  
    const { data } = useEstablishments();
  const [busqueda, setBusqueda] = useState("");
  const [selectedPlace,setSelectedPlace] = useState<Establishment | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  const filteredEstablecimientos = data.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.especialidades.includes(busqueda.toLowerCase()) ||
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
                    <small className="text-muted">{prof.especialidades[0]}</small>
                  </div>
                </div>
                
                <Card.Text>
                  <strong>🐾 Ubicación:</strong> {prof.ubicacion}<br />
                  {/* <strong>⭐ Rating:</strong> {prof.rating}/5 */}
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






type EstablishmentCardType = {
  info: Establishment, 
  setShowModal: (val :boolean) => void, 
  setSelectedProf: (establecimiento: Establishment) => void
}
const EstablishmentCard = (info: EstablishmentCardType)=>{
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
                    <small className="text-muted">{info.info.especialidades[0]}</small>
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
export const Veterinarias2: React.FC = () => {
    const { data, error} = useEstablishments();
    const [establecimientos,setEstablecimientos] = useState<Establishment[]>([])
  const [busqueda, setBusqueda] = useState("");
  const [selectedPlace,setSelectedPlace] = useState<Establishment | null>(null)
  const [showModal, setShowModal] = useState(false);
  const [urgencias,seturgencias] = useState<boolean>(false)
  const [laboratorio,setLaboratorio] = useState<boolean>(false)
  const [quirofano,setQuirofano] = useState<boolean>(false)
  const [peluqueria,setPeluqueria] = useState<boolean>(false)
  const [petshop,setPetshop] = useState<boolean>(false)
  
  const switches = [ 
  {
    etiqueta: "Urgencias",
    estado: urgencias,
    accion: seturgencias
  }, 
  {
    etiqueta: "Laboratorio",
    estado: laboratorio,
    accion: setLaboratorio
  }, 
  {
    etiqueta: "Quirofano",
    estado: quirofano,
    accion: setQuirofano
  }, 
  {
    etiqueta: "Peluqueria",
    estado: peluqueria,
    accion: setPeluqueria
  }, 
  {
    etiqueta: "Petshop",
    estado: petshop,
    accion: setPetshop
  },
  ]
   
  useEffect(()=>{
    const filtradoDEnombres = data.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    const filtradoDEpracticas = filtradoDEnombres.filter(p => p.practicas.toLowerCase().includes(busqueda.toLowerCase()));
    const filtradoDEurgencias = urgencias ? filtradoDEpracticas.filter(p => p.haceurgencias === urgencias) : filtradoDEpracticas
    const filtradoDElaboratorio = laboratorio ? filtradoDEurgencias.filter(p => p.tienelaboratorio === laboratorio) : filtradoDEurgencias
    const filtradoDEpeluqueria = peluqueria ? filtradoDElaboratorio.filter(p => p.tienepeluqueria === peluqueria) : filtradoDElaboratorio
    const filtradoDEpetshop = petshop ? filtradoDEpeluqueria.filter(p => p.tienepetshop === petshop) : filtradoDEpeluqueria
    const filtradoDEquirofano = quirofano ? filtradoDEpetshop.filter(p => p.tienequirofano === quirofano) : filtradoDEpetshop
    
    setEstablecimientos(filtradoDEquirofano)

  },[data,busqueda,urgencias,laboratorio,peluqueria,petshop,quirofano])

  const filteredEstablecimientos = data.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.practicas.toLowerCase().includes(busqueda.toLowerCase()) 
    //p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
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
          placeholder="Buscar por nombre, ubicación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline-secondary">
          🔍
        </Button>
      </InputGroup>
        <SwitchExample switches={switches}/>
        {/* <SwitchExample etiqueta={'Hace urgencias'} activo={urgencias} setActivo={seturgencias} />
        <SwitchExample etiqueta={'Tiene laboratorio'} activo={laboratorio} setActivo={setLaboratorio} />
        <SwitchExample etiqueta={'Tiene peluqueria'} activo={peluqueria} setActivo={setPeluqueria} />
        <SwitchExample etiqueta={'Tiene petshop'} activo={petshop} setActivo={setPetshop} /> */}

      {/* Grid de Veterinarias */}
            {error && <p>Lo siguientes perfiles son falsos e inventados</p>}
      <Row xs={1} md={2} lg={3} className="g-4">
        {establecimientos.map((establecimiento) => (
          <EstablishmentCard key={establecimiento.id} info={establecimiento} setShowModal={setShowModal} setSelectedProf={setSelectedPlace}/>
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

export default Veterinarias2;