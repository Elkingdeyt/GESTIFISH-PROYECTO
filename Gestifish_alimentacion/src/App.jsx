import { useState } from 'react'

import {Routes, Route, NavLink} from 'react-router-dom'

import Home from './home/Home'
import CrudAlimento from './alimento/crudALimento'
import CrudResponsable from './Responsables//CrudResponsable'
// import Responsable from './home/Responsable'

import imagen_logo from '../src/LOGO_GESTIFISH.png'
import "../src/App.css"

const App = () => {
  return (
    <>
      <body className='bs-body-color-red'></body>
      <nav className='navbar navbar-expand-lg navbar-light bg-primary py-3 shadow-sm' data-bs-theme="dark">
        <ul className='nav'>
          <li className="navbar-brand" href="#">
            <img src={imagen_logo} alt="" className="" style={{ width: '95px', height: '50px' }} />
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link fs-5' to="/" activeClassName="active" exact>
              Inicio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link fs-5' to="/Alimentacion" activeClassName="active">
              Alimentacion
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link fs-5' to="/Responsable" activeClassName="active">
              Quienes somos
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Alimentacion' element={<CrudAlimento />} />
        <Route path='/Responsable' element={<CrudResponsable/>}/>
      </Routes>
    </>
  );
};

export default App;
