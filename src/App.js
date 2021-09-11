import React from 'react';
import Login from '../src/views/Login'
import 'bootswatch/dist/pulse/bootstrap.css'
import './views/custom.css'

class App extends React.Component{
  render()
  {
    return(
    <div>
      <Login />
    </div>
    )
  }
}

export default App;
