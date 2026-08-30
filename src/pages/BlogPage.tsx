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
import BannerDEpublicidad from '../components/BannerDEpublicidad';
import type { Blog } from '../types/blog-type';
import { useBlogs } from '../hooks/useBlogData';
import type { Publicidad } from '../types/publicidad-type';

type Props = {
  publis: Publicidad[] | null
}
const BlogPagee: React.FC<Props> = ({publis}: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState<string>('all');
  //const [blogs] = useState<Blog[]>(mockBlogs);
  const { data, error } = useBlogs();

  // Filtrar blogs según búsqueda y estado
  const filteredBlogs = useMemo(() => {
    return data.filter((blog: Blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = stateFilter === 'all' || blog.state === stateFilter;
      return matchesSearch && matchesState && blog.state !== 'DISABLE';
    });
  }, [data, searchTerm, stateFilter]);

  // Función para obtener el color del badge según el estado
  const getStateBadge = (state: string) => {
    switch(state) {
      case 'ABLE':
        return <Badge bg="success">Publicado</Badge>;
      case 'STANDBY':
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
        <BannerDEpublicidad publis={publis}/>

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
          {error && <p>Ha ocurrido un error al obtener la informacion</p>}
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
            Mostrando {filteredBlogs.length} de {data.filter(b => b.state !== 'DISABLE').length} artículos disponibles
          </small>
        </div>
      </Container>
    </Container>
  );
};

export default BlogPagee;
