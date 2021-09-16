import React from 'react';

import Rotas from './Rotas'
import Navbar from '../components/Navbar';
import 'bootswatch/dist/pulse/bootstrap.css'
import '../views/custom.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

class App extends React.Component{
  render()
  {
    return(
      <>
         <Navbar />
         <div className="container">
              <Rotas />
         </ div>
      </>  
    )
  }
}

export default App;
