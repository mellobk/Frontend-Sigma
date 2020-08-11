import React, { Fragment } from 'react'
import '../css/spinner.css'
import okImg from "../img/okImg.png";
const Success = (props) => (

<Fragment>

    <div className="alert alert-success" role="alert" style={{textAlign:"center"}}>
    <img alt='imagen ok landing' src={okImg} className='landing__ok__img'/>
  { props.mensaje}
</div>
 </Fragment>
)

export default Success