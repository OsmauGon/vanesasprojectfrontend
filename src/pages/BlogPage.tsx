
type Blog ={
    id: number,
    idOwner: number,
    title: string,
    description: string,
    documentUrl?: string,//Porque puede o no tener para descargar
    imageUrl?: string,//Porque puede o no tener para ver
    videoUrl?: string,//Porque puede o no tener para ver
    state: "able"  | "disable" | "standby" 
}
const blogsExample :Blog[] = [
    {
    id: 1,
    idOwner: 1,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 12,
    idOwner: 12,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 13,
    idOwner: 13,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 14,
    idOwner: 14,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 15,
    idOwner: 15,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 16,
    idOwner: 16,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 17,
    idOwner: 17,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     },
    {
    id: 18,
    idOwner: 18,
    title: "string",
    description: "string",
    documentUrl: "string",
    imageUrl: "string",
    videoUrl: "string",
    state: "able"
     }
]
export const BlogPage = () => {
  return (
    <div>BlogPage <br />{blogsExample.map((item)=> JSON.stringify(item))}</div>
  )
}































// BlogPage.tsx
import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Badge, InputGroup, Form } from 'react-bootstrap';
import { 
  FaDownload, 
  FaPlay, 
  FaSearch, 
  FaUserMd
} from 'react-icons/fa';
import '../styles/blogPage.css';

type Blogg = {
  id: number;
  idOwner: number;
  title: string;
  description: string;
  documentUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  state: "able" | "disable" | "standby";
};

// Datos de ejemplo
const mockBlogs: Blogg[] = [
  {
    id: 1,
    idOwner: 101,
    title: "Avances en Odontología Veterinaria 2024",
    description: "Descubre las últimas técnicas en cuidado dental para mascotas. Incluye guía práctica para limpieza dental profesional.",
    documentUrl: "/docs/dental-guide.pdf",
    imageUrl: "https://picsum.photos/id/20/400/300",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    state: "able"
  },
  {
    id: 2,
    idOwner: 102,
    title: "Nutrición Especializada para Animales Senior",
    description: "Guía completa sobre alimentación para perros y gatos de edad avanzada. Recomendaciones de especialistas.",
    documentUrl: "/docs/senior-nutrition.pdf",
    imageUrl: "https://picsum.photos/id/169/400/300",
    state: "able"
  },
  {
    id: 3,
    idOwner: 103,
    title: "Protocolos de Emergencia en Cirugía",
    description: "Video tutorial sobre procedimientos de urgencia en quirófano veterinario. Casos prácticos incluidos.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "https://picsum.photos/id/107/400/300",
    state: "able"
  },
  {
    id: 4,
    idOwner: 104,
    title: "Fisioterapia y Rehabilitación Equina",
    description: "Técnicas modernas de rehabilitación para caballos. Incluye ejercicios prácticos y casos de éxito.",
    documentUrl: "/docs/equine-rehab.pdf",
    imageUrl: "https://picsum.photos/id/135/400/300",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    state: "standby"
  },
  {
    id: 5,
    idOwner: 105,
    title: "Prevención de Zoonosis en Clínicas",
    description: "Manual de buenas prácticas para prevenir enfermedades transmisibles entre animales y humanos.",
    documentUrl: "/docs/zoonosis-prevention.pdf",
    imageUrl: "https://picsum.photos/id/220/400/300",
    state: "able"
  },
  {
    id: 6,
    idOwner: 106,
    title: "Ultrasonografía Avanzada",
    description: "Webinar sobre técnicas de diagnóstico por imagen. Casos clínicos y mejores prácticas.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "https://picsum.photos/id/124/400/300",
    state: "able"
  }
];

const BlogPagee: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [blogs] = useState<Blog[]>(mockBlogs);

  // Filtrar blogs según búsqueda y estado
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = stateFilter === 'all' || blog.state === stateFilter;
      return matchesSearch && matchesState && blog.state !== 'disable';
    });
  }, [blogs, searchTerm, stateFilter]);

  // Función para obtener el color del badge según el estado
  const getStateBadge = (state: string) => {
    switch(state) {
      case 'able':
        return <Badge bg="success">Publicado</Badge>;
      case 'standby':
        return <Badge bg="warning" text="dark">En revisión</Badge>;
      default:
        return null;
    }
  };

  // Función para renderizar el contenido multimedia
  const renderMedia = (blog: Blog) => {
    if (blog.imageUrl) {
      return (
        <div className="blog-media">
          <img 
            src={blog.imageUrl} 
            alt={blog.title}
            className="blog-image"
          />
          {blog.videoUrl && (
            <div className="media-overlay">
              <FaPlay className="play-icon" />
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Container fluid className="blog-page py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          {/* <h1 className="display-4 fw-bold mb-3">Blog Veterinario</h1> */}
          <h1 >Blog Veterinario</h1>
          <p className="lead text-muted">
            Descubre artículos, guías y recursos compartidos por profesionales del sector
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <div className="filters-container">
              <InputGroup className="search-input">
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por título o descripción..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              <div className="state-filter mt-3 d-flex justify-content-center gap-2">
                <Button
                  variant={stateFilter === 'all' ? 'primary' : 'outline-primary'}
                  className={stateFilter === 'all' ? 'boton1' : 'boton2'}
                  size="sm"
                  onClick={() => setStateFilter('all')}
                >
                  Todos
                </Button>
                <Button
                  variant={stateFilter === 'able' ? 'success' : 'outline-success'}
                  className={stateFilter === 'able' ? 'boton1' : 'boton2'}
                  size="sm"
                  onClick={() => setStateFilter('able')}
                >
                  Publicados
                </Button>
                <Button
                  variant={stateFilter === 'standby' ? 'warning' : 'outline-warning'}
                  className={stateFilter === 'standby' ? 'warning' : 'outline-warning'}
                  size="sm"
                  onClick={() => setStateFilter('standby')}
                >
                  En revisión
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Grid de blogs */}
        <Row className="g-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <Col key={blog.id} lg={4} md={6} xs={12}>
                <Card className="blog-card h-100 shadow-sm">
                  {renderMedia(blog)}
                  
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      {getStateBadge(blog.state)}
                      <small className="text-muted">
                        <FaUserMd className="me-1" />
                        Dr. ID: {blog.idOwner}
                      </small>
                    </div>

                    <Card.Title className="blog-title h5 fw-bold mb-3">
                      {blog.title}
                    </Card.Title>

                    <Card.Text className="blog-description text-muted">
                      {blog.description}
                    </Card.Text>

                    <div className="blog-actions mt-3">
                      {blog.documentUrl && (
                            <a 
                            href={blog.documentUrl}
                            download
                            className="text-decoration-none"
                            >
                            <Button variant="outline-primary" size="sm" className="me-2">
                                <FaDownload className="me-1" />
                                Descargar PDF
                            </Button>
                            </a>
                        )}
                      
                      {blog.videoUrl && (
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => window.open(blog.videoUrl, '_blank')}
                        >
                          <FaPlay className="me-1" />
                          Ver video
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div className="text-center py-5">
                <FaSearch className="display-1 text-muted mb-3" />
                <h3 className="text-muted">No se encontraron resultados</h3>
                <p>Intenta con otros términos de búsqueda o elimina los filtros</p>
              </div>
            </Col>
          )}
        </Row>

        {/* Footer stats */}
        <div className="text-center mt-5 pt-4 text-muted">
          <small>
            Mostrando {filteredBlogs.length} de {blogs.filter(b => b.state !== 'disable').length} artículos disponibles
          </small>
        </div>
      </Container>
    </Container>
  );
};

export default BlogPagee;
