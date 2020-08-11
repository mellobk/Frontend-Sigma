import React from 'react'
import '../css/spinner.css'
import { Link } from "react-router-dom";

const Fatal = (props) => (

      
    <div class="alert alert-danger" role="alert">
  
  { `${props.mensaje} `} {props.modeloRepetido? <Link
                to={`/Cuentas/${props.modeloRepetido}`}
                className="btn__perfil">Ver Cuentas</Link>: ''}
</div>
    
)
export default Fatal
/*

class Fatal extends Component {


  ListadoErrores = () => {
    const { mensaje } = this.props;



return(
  {mensaje}
)

};
  render(){
    return(

<div className="alert alert-danger" role="alert">
{this.ListadoErrores()}
</div>

    )
  }

}
export default Fatal */