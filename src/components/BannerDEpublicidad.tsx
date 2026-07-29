
import { Carousel } from 'react-bootstrap'



const BannerDEpublicidad = () => {
  return (
    <Carousel className="m-auto rounded overflow-hidden shadow w-75">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/publicidad2.jpg"
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
                src="img/publicidad3.jpg"
                alt="Gato en el veterinaria"
                style={{ height: '100px', objectFit: 'cover' }}
              />
              {/* <Carousel.Caption>
                <h3>Clínicas Veterinarias</h3>
                <p>Las mejores clínicas cerca de ti.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/publicidad4.jpg"
                alt="Perros jugando"
                style={{ height: '100px', objectFit: 'cover' }}
              />
              {/* <Carousel.Caption>
                <h3>Encuentra el mejor cuidado</h3>
                <p>Profesionales especializados a tu disposición.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            
    </Carousel>
  )
}

export default BannerDEpublicidad