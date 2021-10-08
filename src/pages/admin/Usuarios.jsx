import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';


const usuariosBackend = [
    {
      nombre: 'Angel',   
      estado: "Pendiente",
      rol: "Admin",
      
    },
    {
      nombre: 'Luis',
      estado: "Autorizado",
      rol: "Vendedor",
      
    },
   
  
  
   
  
   
    
  ];


const Usuarios = () => {

        const [mostrarTabla, setMostrarTabla] = useState(true);
        const [usuarios, setUsuarios] = useState([]);
        const [textoBoton, setTextoBoton] = useState('Agregar Nuevo');
        
      
        useEffect(() => {
          setUsuarios(usuariosBackend);
        }, []);
      
        useEffect(() => {
          if (mostrarTabla) {
            setTextoBoton('Agregar Nuevo');
            
          } else {
            setTextoBoton('Mostrar Todos');
            
          }
        }, [mostrarTabla]);
        return (
          <div className='flex h-full w-full flex-col items-center justify-start p-56  '>
            <div className='flex flex-col p-10'>
              <h2 className='text-3xl font-extrabold text-gray-200'>
                Gestión de usuarios
              </h2>
              <div className = "flex flex-col ">
              <button onClick={() => {setMostrarTabla(!mostrarTabla);}}className=" shadow-md bg-indigo-900 border border-black font-semibold text-gray-200 p-2 rounded m-6" >
                {textoBoton}
              </button>
              </div>
            </div>
            {mostrarTabla ? (
              <TablaUsuarios listausuarios={usuarios} />
            ) : (
              <FormularioCreacionUsuarios
                setMostrarTabla={setMostrarTabla}
                listausuarios={usuarios}
                setusuarios={setUsuarios}
              />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
          </div>
        );
      };
      
      const TablaUsuarios = ({ listausuarios }) => {
        useEffect(() => {
          console.log('este es el listado de usuarios en el componente de tabla', listausuarios);
        }, [listausuarios]);
        return (

        
          <div className='flex flex-col items-center justify-center'>
            
            <table className="tabla ">
              <thead>
                <tr>
                  <th className="bg-indigo-900 text-gray-200   "> Nombre</th>
                  <th className="bg-indigo-900 text-gray-200  "> Estado</th>
                  <th className="bg-indigo-900 text-gray-200  "> Rol</th>
                  <th className="bg-indigo-900 text-gray-200  ">Modificar</th>  
                </tr>
              </thead>
              <tbody>
                {listausuarios.map((usuario) => {
                  return (
                    <tr key={nanoid()}>
                      <td className=" text-center text-black">{usuario.nombre}</td>
                      <td className=" text-center text-black">{usuario.estado}</td>
                      <td className=" text-center text-black">{usuario.rol}</td>
                      <td>
                        <div className="flex w-full justify-around text-black ">
                          <i className="fas fa-edit hover:text-yellow-600"/>
                        
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
         
        );
      };
      
      const FormularioCreacionUsuarios = ({ setMostrarTabla, listausuarios, setusuarios }) => {
        const form = useRef(null);
      
        const submitForm = (e) => {
          e.preventDefault();
          const fd = new FormData(form.current);
          
          const nuevousuario = {};
          fd.forEach((value, key) => {
            nuevousuario[key] = value;
          });
      
          setMostrarTabla(true);
          setusuarios([...listausuarios, nuevousuario]);
          toast.success('Venta Agregada Exitosamente');
          
        };
      
        return (
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold pb-4 text-gray-200 '>Nuevo usuario</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col justify-center text-center'>
              <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='nombre'>
                Nombre
                <input
                  name='nombre'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  disabled
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='correo'>
                Correo
                <input
                  name='correo'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  disabled
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='estado'>
                Estado
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  name='estado'
                  required
                  defaultValue={0}>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>Pendiente</option>
                  <option>Autorizado</option>
                  <option>No Autorizado</option>
                </select>
              </label>
              <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='rol'>
                Rol
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  name='rol'
                  required
                  >
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </select>
              </label>
              
              <button
                type='submit'
                className='col-span-2 py-3 bg-indigo-900 font-semibold  text-gray-200 p-2 rounded shadow-md'
              >
                Guardar
              </button>
            </form>
          </div>
        );
      };

export default Usuarios