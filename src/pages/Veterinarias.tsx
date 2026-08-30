import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { ModalDEestablecimiento } from '../components/modales/ModalDEestablecimiento';
import SwitchExample from '../components/SwitchExample';
import type { Establishment } from '../types/establishment-type';
import { useEstablishments } from '../hooks/useEstablishmentData';
import BannerDEpublicidad from '../components/BannerDEpublicidad';
import type { Publicidad } from '../types/publicidad-type';



export const VeterinariasOriginal: React.FC = () => {
  
    const { data } = useEstablishments();
  const [busqueda, setBusqueda] = useState("");
  const [selectedPlace,setSelectedPlace] = useState<Establishment | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  const filteredEstablecimientos = data.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.servicios.includes(busqueda.toLowerCase()) ||
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
                    <small className="text-muted">{prof.servicios[0]}</small>
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





type Props = {
  publis: Publicidad[] | null
}
type EstablishmentCardType = {
  info: Establishment, 
  setShowModal: (val :boolean) => void, 
  setSelectedProf: (establecimiento: Establishment) => void
}
const EstablishmentCard = (info: EstablishmentCardType)=>{
  console.clear()
  console.log(info)
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
                    <small className="text-muted">{info.info.servicios[0]}</small>
                  </div>
                </div>
                

                <div className="d-grid gap-2">
                  <Button 
                    variant={"primary"}
                    
                    className='boton1'
                    onClick={() => {info.setShowModal(true); info.setSelectedProf(info.info)}}
                  > Ver
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  )
}

export const Veterinarias3: React.FC<Props> = ({publis}: Props) => {
    const { data, error} = useEstablishments();
    const [establecimientos,setEstablecimientos] = useState<Establishment[]>([])
  const [busqueda, setBusqueda] = useState("");
  const [switches, setSwitches] = useState<string[]>([]);
  const [selectedPlace,setSelectedPlace] = useState<Establishment | null>(null)
  const [showModal, setShowModal] = useState(false);
  
  const allswitches = [ 
  {
    indice: 1,
    etiqueta: "Urgencias",
    valor: "urgencias",
  }, 
  {
    indice: 2,
    etiqueta: "Laboratorio",
    valor: "laboratorio",
  }, 
  {
    indice: 3,
    etiqueta: "Quirofano",
    valor: "quirofano",
  }, 
  {
    indice: 4,
    etiqueta: "Peluqueria",
    valor: "peluqueria",
  }, 
  {
    indice: 5,
    etiqueta: "Petshop",
    valor: "petshop"
  },
  ]
  useEffect(()=>{
    console.log(data)
      const resultado = data.filter(producto =>
      producto.insignias.some(badge =>
        switches.includes(badge)
        )
      );
    if(switches.length == 0) setEstablecimientos(data)
    
    else setEstablecimientos(resultado)
    

  },[data,switches])

  const filteredEstablecimientos = establecimientos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) 
    || p.practicas.toLowerCase().includes(busqueda.toLowerCase()) 
    //|| p.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Veterinarias</h1>
        <Badge bg="secondary" pill>{filteredEstablecimientos.length} disponibles</Badge>
      </div>
      <BannerDEpublicidad publis={publis}/>
      {/* Buscador */}
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar por nombre, practicas..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline-secondary">
          🔍
        </Button>
      </InputGroup>
        <SwitchExample allswitches={allswitches} switches={switches} accion={setSwitches}/> 

      {/* Grid de Veterinarias */}
            {error && <p>Lo siguientes perfiles son falsos e inventados</p>}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredEstablecimientos.map((establecimiento) => (
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