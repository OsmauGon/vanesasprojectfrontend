import Form from 'react-bootstrap/Form';
import '../styles/switch-style.css'

type SwitchSettings ={
    etiqueta: string;
    estado: boolean;
    accion: (val: boolean) => void
}
type SeveralSwitches = {
  switches: SwitchSettings[]
}

function SwitchExampleOriginal(switches: SeveralSwitches) {
  return (
    <Form className='switches-container'>
      {switches.switches.map(i=> (
              <Form.Check // prettier-ignore
              key={i.etiqueta}
                type="switch"
                className="custom-switch"
                label={i.etiqueta}
                onChange={()=> {i.accion(!i.estado);}}
              />
      ))
    }
    </Form>
  );
}
export default SwitchExampleOriginal