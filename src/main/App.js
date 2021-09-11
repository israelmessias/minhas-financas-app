import React from 'react';
//import Login from '../src/views/Login'
import CadastroUser from '../views/CadastroUser'
import 'bootswatch/dist/pulse/bootstrap.css'
import '../views/custom.css'

class App extends React.Component{
  render()
  {
    return(
    <div>
      <CadastroUser />
    </div>
    )
  }
}

export default App;
