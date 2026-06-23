import Form from 'react-bootstrap/Form';

type SwitchSettings ={
    etiqueta: string;
    activo: boolean;
    setActivo: (val: boolean) => void
}

function SwitchExample(props :SwitchSettings) {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={props.etiqueta}
        onChange={()=> {props.setActivo(!props.activo); console.log(props.activo)}}
      />
      {/* <Form.Check // prettier-ignore
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      /> */}
    </Form>
  );
}

export default SwitchExample;