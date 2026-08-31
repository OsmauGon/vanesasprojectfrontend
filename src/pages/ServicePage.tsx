
import type { Publicidad } from '../types/publicidad-type'
import BannerDEpublicidad from '../components/BannerDEpublicidad'
import type { Service } from '../types/service-type'
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { useServices } from '../hooks/useServiceData';
import { useMemo, useState } from 'react';
import { ModalDEService } from '../components/modales/ModalDEservicio';

type Props = {
    publis: Publicidad[] | null
}
type ServiceCardType = {
  info: Service, 
  setShowModal: (val :boolean) => void, 
  setSelectedProf: (prof: Service) => void
}
const ServiceCard = (info: ServiceCardType)=>{
  return (
    <Col key={info.info.id}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body >
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={`${info.info.imagenLogo ? info.info.imagenLogo : "img/imagenRecurrente.jpg"}`} 
                    alt={info.info.nombre}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                  <div>
                    <Card.Title className="mb-0">{info.info.nombre}</Card.Title>
                    <small className="text-muted">{info.info.topico}</small>
                  </div>
                </div>
                

                <div className="d-grid gap-2">
                  <Button 
                    variant={"primary"}
                    className='boton1'
                    onClick={() => {info.setShowModal(true); info.setSelectedProf(info.info)}}
                  >
                    Ver Contacto
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
  )
}

const ServicePage = ({publis}: Props) => {
  const { data, error } = useServices();
  const [busqueda, setBusqueda] = useState("");
  const [selectedProf,setSelectedProf] = useState<Service | null>(null)
  const [showModal, setShowModal] = useState(false);
  const [stateFilter, setStateFilter] = useState<string>('all');

  const filteredBlogs = useMemo(() => {
      return data.filter((serv: Service) => {
        const matchesSearch = serv.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             serv.descripcion.toLowerCase().includes(busqueda.toLowerCase())
                             || serv.topico.toLowerCase().includes(busqueda.toLowerCase())
        const matchesClass = stateFilter === "all" || serv.clase === stateFilter
        return matchesSearch && matchesClass 
      });
    }, [data, busqueda, stateFilter]);
    

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 >Servicios y productos</h1>
        <Badge bg="secondary" pill>{filteredBlogs.length} disponibles</Badge>
      </div>

      {/* Buscador */}
      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar por nombre o descripcion..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline-secondary">
          🔍
        </Button>
      </InputGroup>
      <BannerDEpublicidad publis={publis}/>
        
      <div className="state-filter m-3 d-flex justify-content-center gap-2">
                      <Button
                        variant={stateFilter === 'all' ? 'primaty' : 'outline-primaty'}
                        className={stateFilter === 'all' ? 'boton1' : 'boton2'}
                        size="sm"
                        onClick={() => setStateFilter('all')}
                      >
                        Todos
                      </Button>
                      <Button
                        variant={stateFilter === 'SERVICIO' ? 'primaty' : 'outline-primaty'}
                        className={stateFilter === 'SERVICIO' ? 'boton1' : 'boton2'}
                        size="sm"
                        onClick={() => setStateFilter('SERVICIO')}
                      >
                        Servicios
                      </Button>
                      <Button
                        variant={stateFilter === 'PRODUCTO' ? 'primaty' : 'outline-primaty'}
                        className={stateFilter === 'PRODUCTO' ? 'boton1' : 'boton2'}
                        size="sm"
                        onClick={() => setStateFilter('PRODUCTO')}
                      >
                        Productos
                      </Button>
                    </div>
      {/* Grid de Profesionales */}
      {error && <p>Lo siguientes perfiles son falsos e inventados</p>}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredBlogs.map((prof) => (
          <ServiceCard key={prof.id} info={prof} setShowModal={setShowModal} setSelectedProf={setSelectedProf}/>
        ))}
      </Row>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-5">
          <h3 className="text-muted">No se encontraron profesionales</h3>
        </div>
      )}
      <ModalDEService show={showModal} hide={() => setShowModal(false)} obj={selectedProf} />
          
    </Container>
  );
};

export default ServicePage