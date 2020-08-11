import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as HomeAction from "../../actions/HomeAction";
import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import sigmaLogo from "../../img/sigma-logo.png";
import sigmaImg from "../../img/sigma-image.png";
import Spinner from "../../General/Spinner";
import Fatal from "../../General/Fatal";
import Success from "../../General/Success";
import Modal from "react-bootstrap/Modal";


const validate=values=>{
    const errors={}

    if(!values.name){
      errors.name=true
    }

    if(!values.email){
      errors.email=true
    }

    if(!values.citie){
      errors.citie=true
    }

    if(!values.departament){
      errors.departament=true
    }

    return errors
}


class Home extends Component {
  state = { show: false, departament: "", citie: "", name: "", email: "" , errors:{

  }};

  hideModal = () => {
    const { modal_change } = this.props;
    modal_change(false);
  };

  async componentDidMount() {
    const { consultar_departamentos } = this.props;

    consultar_departamentos();
  }

  HandleMessage = () => {
    const { success } = this.props;

    if (success) {
      return <Success mensaje={success} />;
    }

    return false;
  };

  HandleWaiting = () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error} />;
    }
    return false;
  };

  

  handleDepartments = ({ target }) => {
    const { value } = target;
    const { consultar_ciudades } = this.props;
    this.setState({ departament: value });
    this.setState({ citie:"" });
   consultar_ciudades(value);
   
  };

  handleCitites = ({ target }) => {
    const { value } = target;
    this.setState({ citie: value });
  };

  send_information = (e) => {
    e.preventDefault();

    const {errors,...sinErrors}=this.state
    const result = validate(sinErrors)
    console.log(result)
    this.setState({errors:result})
    
    if(!Object.keys(result).length){

      console.log('enviarform')
 
      const { send_information } = this.props;
    const data = {
      name: this.state.name,
      email: this.state.email,
      state: this.state.departament,
      city: this.state.citie,
    };

    send_information(data);
    }
    
  };

  departamentsList = () => {
    const { departament_list } = this.props;

    const list = () =>
      departament_list.map((departament, key) => (
        <option className="option-values" key={key} value={departament.name}>
          {departament.name}
        </option>
      ));

    return (
      <select
        className="lading__selects"
        name="cities"
        onChange={this.handleDepartments}
        placeholder="Departamentos"
      >
        <option className="option-values" value="">
          Selecciona un departamento
        </option>
        {list()}
      </select>
    );
  };

  citiesList = () => {
    const { cyties_list } = this.props;

    const list = () =>
      cyties_list.map((cities, key) => (
        <option className="option-values" key={key} value={cities}>
          {cities}
        </option>
      ));

    return (
      <select
        className="lading__selects"
        name="cities"
        onChange={this.handleCitites}
      >
        <option className="option-values" value="">
          Selecciona una ciudad
        </option>
        {list()}
      </select>
    );
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { errors } = this.state;
    
    return (
     
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <img
                src={sigmaLogo}
                alt="logo sigma 3d"
                className="landing__logo__img"
              />
              <h1 className="landing__tittle"> Prueba de desarrollo Sigma</h1>
              <h2 className="landing__princiapl__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h2>
            </div>

            <div className="col-md-6">
              <img
                src={sigmaImg}
                alt="logo sigma 3d"
                className="landing__form__img"
              />
            </div>

            <div className="col-md-6">
              <form className="landing__form" onSubmit={this.send_information}>
              <label style={errors.departament?{color:"red"}:{color:"black"}}>Departamento* </label>
                {this.departamentsList()}

                 <label style={errors.citie?{color:"red"}:{color:"black"}}>Ciudad* </label>
                {this.citiesList()}

                <label style={errors.name?{color:"red"}:{color:"black"}}>Nombre*</label>
                <input
                  type="text"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="Pepito de jesus"
                  value={this.state.name}
                />

                <label style={errors.email?{color:"red"}:{color:"black"}}>Correo*</label>
                <input
                  type="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Pepitodejesus@gmail.com"
                  value={this.state.email}
                />

                <button className="landing__btn" type="submit">
                  ENVIAR
                </button>
                <div style={{ width: "100%", textAlign: "center" }}>
                  {this.HandleWaiting()}
                </div>
              </form>
            </div>
          </div>
        </div>

        <Modal
          show={this.props.showModal}
          onHide={this.hideModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>{this.HandleMessage()}</Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
const mapStateToProps = (reducers) => {
  return reducers.HomeReducer;
};
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, HomeAction)(Home);
