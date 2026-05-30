import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Veterinarias: React.FC = () => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Veterinarias</Card.Title>
          <Card.Text>
            Aquí se mostrará el listado de clínicas veterinarias cercanas.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Veterinarias;