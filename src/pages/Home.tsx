import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container fluid className="p-4">
      {/* Bienvenido */}
      <div className="mb-5">
        <h1 className="display-4 fw-bold text-primary">Bienvenido a VetConnect</h1>
        <p className="lead text-muted">
          Conectando a amantes de mascotas con los mejores profesionales y clínicas veterinarias.
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
      <h2 className="mb-3">Explorar</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>👨‍⚕️ Veterinarios</Card.Title>
              <Card.Text>
                Encuentra veterinarios especializados cerca de ti.
              </Card.Text>
              <Button variant="primary" href="/profesionales">
                Ver Profesionales
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>🏥 Veterinarias</Card.Title>
              <Card.Text>
                Lista de clínicas y hospitales cercanos.
              </Card.Text>
              <Button variant="primary" href="/veterinarias">
                Ver Clínicas
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>📅 Citas</Card.Title>
              <Card.Text>
                Gestiona las citas y vacunas de tus mascotas.
              </Card.Text>
              <Button variant="primary" href="/calendario">
                Ver Calendario
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100 shadow-sm hover-effect">
            <Card.Body className="text-center">
              <Card.Title>📰 Noticias</Card.Title>
              <Card.Text>
                Tips, consejos y noticias del mundo animal.
              </Card.Text>
              <Button variant="primary" href="/noticias">
                Ver Noticias
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;