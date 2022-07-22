import React from 'react';
import '../../assets/css/navbar.css'
import logo from '../../logo.svg';

export default function NavBar() {
  return (

    <header className="App-header">
      <div className='container-fluid bg-dark naav'>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <ul>
              <li><a href="/">Nosotros</a></li>
              <li><a href="/">Nuestros Clientes</a></li>
              <li><a href="/">Contactanos</a></li>
              <li><a href="/">Trabajá con nosotros</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}
