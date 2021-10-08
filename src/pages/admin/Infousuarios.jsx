import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {
    const[nombre, setNombre] = useState(" Nombre")
    const[estado, setEstado] = useState("")
    const[correo, setCorreo] = useState("Correo")
    const[rol, setRol] = useState("")
  
    const enviarAlBackend = ()=>{
      console.log("nombre", nombre, "estado", estado, "correo", correo, "rol", rol)
      if (estado === ""|rol === ""){
          toast.error("Ingrese los campos faltantes");
      } else {
      toast.success("Procesador añadido exitosamente")
      }
    }
    
    const submitForm = (e)=>{
      e.preventDefault();
      console.log("Datos enviados")
  
    }
    
    return <div className = "  w-80 ml-20 ">
        <ToastContainer position = "bottom-center" autoClose = {5000}/>
      <div className = " text-center  mb-8 ">
       <p className="font-extrabold text-gray-800 text-3xl"> Actualización de información</p>
        </div>
   <form onSubmit = {submitForm} className = " items-center   mt-12 justify-center ">
      <label className = "flex flex-col mb-2 text-center font-semibold " htmlFor =  "nombre">
        Nombre de usuario
        <input name = "nombre" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "NOMBRE" value={nombre} onChange = {(e)=>{setNombre(e.target.value)}}  disabled/>
      </label>
      <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "estado">
        Estado
        <select value={estado} onChange = {(e)=>{setEstado(e.target.value)}} name = "estado" required>
            <option>SELECCIONE UNA OPCIÓN</option>
            <option>PENDIENTE</option>
            <option>AUTORIZADO</option>
            <option>NO AUTORIZADO</option>
        </select>
      </label>
      <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "correo electronico">
        Correo electronico
        <input name = "correo electronico" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "CORREO ELECTRONICO" value = {correo} onChange = {(e)=>{setCorreo(e.target.value)}} disabled/>
      </label>
      <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "rol">
        Rol
        <select value={rol} onChange = {(e)=>{setRol(e.target.value)}} name = "rol" required>
            <option>SELECCIONE UNA OPCIÓN</option>
            <option>ADMINISTRADOR</option>
            <option>VENDEDOR</option>
        </select>
      </label>
      <button onClick ={()=>{enviarAlBackend()}} type = "submit" className = 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-12 border border-gray-400 rounded shadow ml-20 mt-4'> Guardar </button>
  
  </form>
    
        
    <div className = "mt-4 ml-28">
<a href= "/admin/usuarios" className = 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow text-center  mt-10'>Atrás</a>
</div>
        
    </div>
    
  
  };

export default Info
