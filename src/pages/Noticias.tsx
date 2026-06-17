import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Form, Button, Pagination } from 'react-bootstrap';
import { ModalDEnoticia } from '../components/modales/ModalDEnoticia';

interface Noticia {
  id: number;
  titulo: string;
  resumen: string;
  contenido: string;
  categoria: string;
  autor: string;
  fecha: string;
  imagen: string;
  destacada: boolean;
}

const noticiasData: Noticia[] = [
  {
    id: 1,
    titulo: "Nuevas recomendaciones para la vacunación de mascotas en 2024",
    resumen: "El Colegio de Veterinarios actualiza el calendario de vacunación obligatoria para perros y gatos.",
    contenido: "El Colegio de Veterinarios ha publicado nuevas diretrizes...",
    categoria: "Salud",
    autor: "Dra. Ana García",
    fecha: "2024-01-10",
    imagen: "imagen1.png",
    destacada: true
  },
  {
    id: 2,
    titulo: "Campaña de esterilización gratuita en Santiago",
    resumen: "La municipalidad de Santiago lanza programa de esterilización gratuita para mascotas de bajos recursos.",
    contenido: "Con el objetivo de controlar la población animal...",
    categoria: "Comunidad",
    autor: "Carlos López",
    fecha: "2024-01-08",
    imagen: "imagen2.png",
    destacada: false
  },
  {
    id: 3,
    titulo: "Alimentos toxicos para perros: lo que debes evitar",
    resumen: "Conoce los alimentos comunes que pueden ser peligrosos para la salud de tu perro.",
    contenido: "Muchos alimentos que son seguros para humanos...",
    categoria: "Cuidados",
    autor: "Mario Díaz",
    fecha: "2024-01-05",
    imagen: "imagen3.png",
    destacada: false
  },
  {
    id: 4,
    titulo: "Tendencia: adopcion de mascotas exoticas en Chile",
    resumen: "Cada vez más personas optan por mascotas no tradicionales como hurones, conejos o reptiles.",
    contenido: "El mercado de mascotas exóticas crece considerablemente...",
    categoria: "Tendencias",
    autor: "Sofia Reyes",
    fecha: "2024-01-03",
    imagen: "imagen4.png",
    destacada: false
  },
  {
    id: 5,
    titulo: "Consejos para mantener a tu gato feliz en interior",
    resumen: "Los gatos que viven en departamentos necesitan estimulación mental y física adecuada.",
    contenido: "El enriquecimiento ambiental es clave para...",
    categoria: "Cuidados",
    autor: "María Pérez",
    fecha: "2024-01-01",
    imagen: "imagen5.png",
    destacada: false
  },
  {
    id: 6,
    titulo: "Nueva clinica veterinaria abre sus puertas en Providencia",
    resumen: "VetCare inaugura moderno centro de atención con tecnología de punta.",
    contenido: "La nueva clínica cuenta con Quirófano...",
    categoria: "Negocio",
    autor: "Juan Torres",
    fecha: "2023-12-28",
    imagen: "imagen6.png",
    destacada: false
  },
];

const Noticias: React.FC = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState<string>("");
  const [paginaActual, setPaginaActual] = useState<number>(1);
  const noticiasPorPagina = 4;
  const [showModal, setShowModal] = useState(false);
  
  const categorias = ["todos", "Salud", "Comunidad", "Cuidados", "Tendencias", "Negocio"];

  const noticiasFiltradas = noticiasData.filter((noticia) => {
    const coincideCategoria = categoriaFiltro === "todos" || noticia.categoria === categoriaFiltro;
    const coincideBusqueda = 
      noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      noticia.resumen.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  // Calcular paginación
  const indiceInicio = (paginaActual - 1) * noticiasPorPagina;
  const noticiasPaginadas = noticiasFiltradas.slice(indiceInicio, indiceInicio + noticiasPorPagina);
  const totalPaginas = Math.ceil(noticiasFiltradas.length / noticiasPorPagina);

  const noticiaDestacada = noticiasData.find(n => n.destacada);

  const getCategoriaColor = (categoria: string) => {
    const colors: Record<string, string> = {
      Salud: 'danger',
      Comunidad: 'primary',
      Cuidados: 'success',
      Tendencias: 'warning',
      Negocio: 'info'
    };
    return colors[categoria] || 'secondary';
  };

  return (
    <Container className="py-5">
      <h1 >Noticias</h1>

      <Row>
        {/* Main Content */}
        <Col lg={8}>
          {/* Noticia Destacada */}
          {noticiaDestacada && categoriaFiltro === "todos" && busqueda === "" && (
            <Card className="mb-5 shadow-sm">
              <Card.Img variant="top" src={noticiaDestacada.imagen} style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body className="p-4">
                <Badge bg={getCategoriaColor(noticiaDestacada.categoria)} className="mb-2">
                  {noticiaDestacada.categoria}
                </Badge>
                <Card.Title className="display-6 fw-bold mb-3">
                  {noticiaDestacada.titulo}
                </Card.Title>
                <Card.Text className="text-muted mb-3">
                  {noticiaDestacada.resumen}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Por <strong>{noticiaDestacada.autor}</strong> • {noticiaDestacada.fecha}
                  </small>
                  <Button 
                    variant="outline-primary" 
                    className='boton2' size="sm" 
                    onClick={() => setShowModal(true)}
                    >Leer más
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}

          {/* Filters */}
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Form.Control 
              type="text" 
              placeholder="Buscar noticias..." 
              style={{ maxWidth: '300px' }}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className="d-flex gap-2 flex-wrap">
              {categorias.map((cat) => (
                <Button
                  key={cat}
                  variant={categoriaFiltro === cat ? "primary" : "outline-primary"}
                  className={categoriaFiltro === cat ? "boton1" : "boton2"}
                  size="sm"
                  onClick={() => {
                    setCategoriaFiltro(cat);
                    setPaginaActual(1);
                  }}
                >
                  {cat === "todos" ? "Todas" : cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Lista de Noticias */}
          <Row className="g-4">
            {noticiasPaginadas.length > 0 ? (
              noticiasPaginadas.map((noticia) => (
                <Col key={noticia.id} xs={12}>
                  <Card className="shadow-sm h-100">
                    <Row className="g-0">
                      <Col md={4}>
                        <Card.Img 
                          src={noticia.imagen} 
                          style={{ height: '100%', objectFit: 'cover' }}
                          className="h-100 rounded-start"
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <Badge bg={getCategoriaColor(noticia.categoria)}>
                              {noticia.categoria}
                            </Badge>
                            <small className="text-muted">{noticia.fecha}</small>
                          </div>
                          <Card.Title className="h5">{noticia.titulo}</Card.Title>
                          <Card.Text className="text-muted small flex-grow-1">
                            {noticia.resumen}
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <small className="text-muted">Por {noticia.autor}</small>
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="p-0"
                              onClick={() => setShowModal(true)}
                              >Leer más →
                            </Button>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <Card className="text-center p-5">
                  <Card.Body>
                    <h5>No se encontraron noticias</h5>
                    <p className="text-muted">Intenta con otros filtros de búsqueda.</p>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>

          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.Prev 
                  disabled={paginaActual === 1}
                  onClick={() => setPaginaActual(paginaActual - 1)}
                />
                {Array.from({ length: totalPaginas }).map((_, indice) => (
                  <Pagination.Item
                    key={indice + 1}
                    active={paginaActual === indice + 1}
                    onClick={() => setPaginaActual(indice + 1)}
                  >
                    {indice + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next 
                  disabled={paginaActual === totalPaginas}
                  onClick={() => setPaginaActual(paginaActual + 1)}
                />
              </Pagination>
            </div>
          )}
        </Col>

        {/* Sidebar */}
        <Col lg={4} className="mt-5 mt-lg-0">
          {/* Últimas Noticias */}
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Últimas Noticias</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="list-group list-group-flush">
                {noticiasData.slice(0, 5).map((noticia) => (
                  <div key={noticia.id} className="list-group-item border-0">
                    <h6 className="mb-1">{noticia.titulo}</h6>
                    <small className="text-muted">{noticia.fecha}</small>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Suscripción */}
          <Card className="shadow-sm bg-primary text-white fondovioletaclaro">
            <Card.Body className="text-center">
              <h5>Suscríbete al Newsletter</h5>
              <p className="small">Recibe las últimas noticias en tu correo.</p>
              <Form>
                <Form.Control 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="mb-2"
                />
                <Button variant="light" className="w-100 boton3">Suscribirse</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalDEnoticia show={showModal} hide={() => setShowModal(false)} />
          
    </Container>
  );
};

export default Noticias;