import React from 'react';

import Rotas from './Rotas'
import Navbar from '../components/Navbar';
import ProvedorAutenticacao from './ProvedorAutenticacao';


import 'bootswatch/dist/pulse/bootstrap.css'
import '../custom.css'

import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/md-light-deeppurple/theme.css'
import 'primeicons/primeicons.css'

class App extends React.Component{
  render()
  {
    return(
      <ProvedorAutenticacao>
         <Navbar />
         <div className="container">
              <Rotas />
         </ div>
      </ ProvedorAutenticacao>  
    )
  }
}

export default App;
