
import { Carousel } from 'react-bootstrap'



const BannerDEpublicidad = () => {
  return (
    <Carousel className="m-auto rounded overflow-hidden shadow w-75">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900"
                alt="Perros jugando"
                style={{ height: '100px', objectFit: 'cover' }}
              />
              {/* <Carousel.Caption>
                <h3>Encuentra el mejor cuidado</h3>
                <p>Profesionales especializados a tu disposición.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=900"
                alt="Gato en el veterinaria"
                style={{ height: '100px', objectFit: 'cover' }}
              />
              {/* <Carousel.Caption>
                <h3>Clínicas Veterinarias</h3>
                <p>Las mejores clínicas cerca de ti.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
  )
}

export default BannerDEpublicidad