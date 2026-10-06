
import { Button, Modal} from 'react-bootstrap';
import '../../styles/modalStyles.css'
import type { Blog } from '../../types/blog-type';
import { FaDownload, FaPlay } from 'react-icons/fa6';
type ModalProps = {
    obj: Blog | null;
    show: boolean;
    hide: (val: boolean) => void
}


export const ModalDEBlog = (props: ModalProps) => {
  
    return (
    <Modal show={props.show} onHide={() => props.hide(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.obj?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        {props.obj?.bigdescription}

        </Modal.Body>
        <Modal.Footer>
        {props.obj?.documentUrl && (
                            <a 
                            href={props.obj?.documentUrl}
                            download
                            className="text-decoration-none"
                            >
                            <Button variant="outline-primary" size="sm" className="me-2">
                                <FaDownload className="me-1" />
                                Ver Documento
                            </Button>
                            </a>
                        )}
                      
        {props.obj?.videoUrl && (
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => window.open(props.obj?.videoUrl, '_blank')}
                        >
                          <FaPlay className="me-1" />
                          Ver video
                        </Button>
                      )}
        
        </Modal.Footer>
      </Modal>
  )
}