
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';




const handleShareOrDownload = async (imageUrl: string, postId: number) => {
  // Detectar si es móvil por Navigator API
  const isMobile = 'share' in navigator;
  
  if (isMobile) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `missing-${postId}.jpg`, { type: blob.type });
      
      await navigator.share({
        title: '¡Mascota perdida!',
        text: 'Ayudanos a encontrar a esta mascota',
        files: [file]
      });
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error('Error al compartir:', error);
      }
    }
  } else {
    // Descarga en escritorio
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `missing-${postId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
export const Extraviados = () => {
  return (
    <div>Extraviados</div>
  )
}






// MissingPostCard.tsx
const MissingPostCard = ({ post }: { post: MissingPost }) => {
  const canShare = "share" in navigator;//esto es para comprobar si el navegador posee la funcion de compartir
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={post.imageUrl} 
        alt={post.title}
        loading="lazy"
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        {/* <Card.Title>{post.title}</Card.Title>
        <Card.Text className="text-muted small">
          🐾 {post.location}
        </Card.Text> */}
        <Button 
          variant="warning" 
          className="mt-auto boton1"
          onClick={() => handleShareOrDownload(post.imageUrl, post.id)}
        >
          {canShare ? '📱 Compartir' : '💾 Descargar'}
        </Button>
      </Card.Body>
    </Card>
  );
};
// MissingPostsPage.tsx
import { useMissingPosts } from '../hooks/useMissingPosts';
import type { MissingPost } from '../types/missingpost-type';
import { useState } from 'react';
import { ProjectSelect } from '../components/SelectComps';
import BannerDEpublicidad from '../components/BannerDEpublicidad';

const explicaciones :string[] = [
  "Acontinuacion se mostraran los posteos de mascotas que se encuentran extraviadas",
  "Acontinuacion se mostraran los posteos de mascotas que han siso encontradas",
  "Acontinuacion se mostraran los posteos de mascotas que necesitan una familia",
]
const MissingPostsPage = () => {
  const { data, isLoading, error } = useMissingPosts();
  const [page,setPage] = useState<number >(0)
  if (isLoading) return <Spinner animation="border" />;
  /* if (error) return <Alert variant="danger">Error al cargar</Alert>; */

  return (
    <Container className="py-4">
      <h1 className="mb-4">📢 Página de extraviados</h1>
      <BannerDEpublicidad />
        {error && <p>Lo siguientes posteos son falsos</p>}
        
      <ProjectSelect setPage={setPage} explicacion={explicaciones[page / 3]}/>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {data?.filter(item => item.tipo === page/3).map((post: MissingPost) => (
          <Col key={post.id}>
            <MissingPostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};














export default MissingPostsPage