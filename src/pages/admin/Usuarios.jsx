import React from 'react'


const Usuarios = () => {

    return (
      <div>
    <div className= "ml-20">
    
    <div className = " text-center text-3xl font-extrabold  mb-8 ml-20">
       <p className="font-extrabold text-gray-800 "> Listado de Usuarios</p>
        </div>
    <div className = " overflow-auto h-72 space-y-4 border border-black bg-gray-50 font-semibold my-2 p-3 w-96 ml-16 rounded ">
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario1</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario2</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario3</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario4</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario5</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario6</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario7</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario8</a></span>
    <span className="block border rounded text-center"><a href = "Infousuarios">Usuario9</a></span>
  </div>
  
  </div>
      </div>
    );
};

export default Usuarios;