import Form from 'react-bootstrap/Form';
import '../styles/switch-style.css'

type SwitchType = {
  indice: number;
  etiqueta: string;
  valor: string
}
interface SwitchSettings {
  switches: string[]
  allswitches: SwitchType[]
  accion: (val: string[]) => void
}

function SwitchExample({allswitches, accion, switches}: SwitchSettings) {
  const toggleElement = (val: string) => {
    if(switches.includes(val)) accion(switches.filter(ele => ele != val))
    else accion([...switches, val])
  }
    
  return (
    <Form className='switches-container'>
      {allswitches.map(i=> (
              <Form.Check // prettier-ignore
              key={i.indice}
                type="switch"
                className="custom-switch"
                label={i.etiqueta}
                //onChange={()=> {accion(toggleElement(i.valor));}}
                onChange={()=> {toggleElement(i.valor)}}
              />
      ))
    }
    </Form>
  );
}



export default SwitchExample;