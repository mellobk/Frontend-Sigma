import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'






class App extends Component {

  componentDidMount() {


  }

  render() {


    return (
      <BrowserRouter>

        {/*divpara las dar stilos a el menu*/}
      

<Route>
<Route exact path='/' component={Home} />
</Route>
   


      </BrowserRouter>

    )
  }
}
//conectar tareas al reducer y traer las acciones del login actions
export default App