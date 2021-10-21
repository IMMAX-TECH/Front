import React from 'react';
import Logo from '../media/logo.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();

  

  const cerrarSesion = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem('token',null);
  }

  return (
<div class="   bg-gradient-to-r from-black  to-gray-900  text-gray-300">
  <div class="flex flex-col w-80 ">
    <div class=" h-12 flex flex-col items-center justify-center h-10 ">
      <div ><img className="px-2 pt-10" src={Logo} alt="logo" width="80" /></div>
      
      <h1 class="text-xl uppercase text-white text-bold shadow-md">IMMAX TECH</h1>
    </div>
    <ul class="flex flex-col py-10 mt-40 items-center ">
      <li>
        <Link to='/admin'>
        
          <a href="#" class=" h-12 flex flex-col items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center   text-lg text-gray-400"></span>
            <span class="text-sm font-medium">Perfil</span></a>
        
        </Link> 
      </li>
      <li>
        <Link to='/admin/Usuarios'>
          <a href="#" class=" h-12 flex flex-col items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center   text-lg text-gray-400"></span>
            <span class="text-sm font-medium">Usuarios</span>
          </a>
        </Link>
      </li>
      <li>
      <Link to='/admin/Productos'>
          <a href="#" class=" h-12 flex flex-col items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center   text-lg text-gray-400"></span>
            <span class="text-sm font-medium">Productos</span>
          </a>
      </Link>    
      </li>
      <li>
        <Link to='/admin/Ventas'>
          <a href="#" class=" h-12 flex flex-col items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center   text-lg text-gray-400"></span>
            <span class="text-sm font-medium">Ventas</span>
          </a>
        </Link>
      </li>
      
      
      
      <li>
        <button onClick={() => cerrarSesion()}>
          <a href="#" class="flex flex-col items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-red-500 mt-10">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"></span>
            <span class="text-sm font-medium ">Cerrar Sesión</span>
          </a>
        </button>
      </li>
    </ul>
  </div>
</div>
      
  );
};

export default Sidebar;
