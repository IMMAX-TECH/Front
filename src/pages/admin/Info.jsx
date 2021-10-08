import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {
    const[nombre, setNombre] = useState("")
    const[referencia, setReferencia] = useState("Referencia")
    const[valor, setValor] = useState("")
    const[modelo, setModelo] = useState("")
    const[capacidad, setCapacidad] = useState("")
  
    const enviarAlBackend = ()=>{
      console.log("nombre", nombre, "referencia", referencia, "valor", valor, "modelo", modelo, "capacidad", capacidad)
      if (nombre === "" || valor === "" || modelo === ""|| capacidad === ""){
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
        <ToastContainer position="bottom-center" autoClose={5000}/>
        <div className = " text-center  mb-8 ">
         <p className = "text-3xl font-extrabold text-gray-800" > Información del producto </p>
          </div>
     <form onSubmit = {submitForm} className = " items-center   mt-12 justify-center ">
        <label className = "flex flex-col mb-2 text-center font-semibold " htmlFor =  "nombre">
          Nombre del Producto
          <input name = "nombre" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "NOMBRE" value={nombre} onChange = {(e)=>{setNombre(e.target.value)}} required/>
        </label>
        <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "referencia">
          Referencia
          <input name = "referencia" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "REFERENCIA" value = {referencia} onChange = {(e)=>{setReferencia(e.target.value)}} disabled/>
        </label>
        <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "valor">
          Valor unitario
          <input name = "valor" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "VALOR" value = {valor} onChange = {(e)=>{setValor(e.target.value)}} required/>
        </label>
        <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "modelo">
          Modelo
          <input name = "modelo" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "MODELO" value = {modelo} onChange = {(e)=>{setModelo(e.target.value)}} required/>
        </label>
        <label className = "flex flex-col mb-2 text-center font-semibold" htmlFor =  "capacidad">
          Capacidad
          <input name = "capacidad" className = "border border-black rounded shadow w-full flex m-px mt-3 "  type = 'text' placeholder = "CAPACIDAD" value = {capacidad} onChange = {(e)=>{setCapacidad(e.target.value)}} required/>
        </label>
        <button type ="submit" onClick ={()=>{enviarAlBackend()}}  className = 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-12 border border-gray-400 rounded shadow ml-20 mt-4'> Modificar </button>
    
    </form>
    
        
    <div className = "mt-4 ml-28">
<a href= "/admin/procesadores" className = 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow text-center  mt-10'>Atrás</a>
</div>
        
    </div>
    
  
  };

export default Info
