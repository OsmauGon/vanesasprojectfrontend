import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Container fluid className="p-4">
      {/* Bienvenido */}
      <div className="mb-5">
        <h1 className="display-4 fw-bold ">Bienvenido a Veteri.net.ar</h1>
        <p className="lead text-muted">
          Conectando a amantes de mascotas con los mejores profesionales y veterinarias.
        </p>
      </div>

      {/* Carrusel de imágenes decorativo */}
      <Carousel className="mb-5 rounded overflow-hidden shadow">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900"
            alt="Perros jugando"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Encuentra el mejor cuidado</h3>
            <p>Profesionales especializados a tu disposición.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900"
            alt="Gato en el veterinaria"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Clínicas Veterinarias</h3>
            <p>Las mejores clínicas cerca de ti.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Tarjetas de Acceso Rápido */}
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>{/* //profesionales */}
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>👨‍⚕️ Profesionales</Card.Title>
              <Card.Text>
                Profesionales especializados cerca de ti.
              </Card.Text>
              <Button variant="primary" className='boton1' onClick={()=>{navigate("/profesioanles")}}>
                Ver Profesionales
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>{/* //vetes */}
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>🏥 Veterinarias</Card.Title>
              <Card.Text>
                Lista de establecimientos cercanos.
              </Card.Text>
              <Button variant="primary" className='boton1' onClick={()=>{navigate("/veterinarias")}}>
                Ver <br/>Clínicas
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>{/* //noticias */}
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>📰<br></br> Perdidos/Encontrados</Card.Title>
              <Card.Text>
                Publicaciónes de mascostas extraviadas.
              </Card.Text>
              <Button variant="primary" className='boton1' onClick={()=>{navigate("/extraviados")}}>
                Ver <br/>Perdidos / Encontrados
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>{/* //calendario */}
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>📅 Calendario</Card.Title>
              <Card.Text>
                Gestiona las citas y vacunas de tus mascotas.
              </Card.Text>
              <Button variant="primary" className='boton1' onClick={()=>{navigate("/calendario")}}>
                Ver Calendario
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;