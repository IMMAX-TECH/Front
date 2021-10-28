import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import { obtenerUsuario, editarUsuario, crearUsuario } from 'utils/api';
import ReactLoading from 'react-loading';




const Usuarios = () => {

        const [mostrarTabla, setMostrarTabla] = useState(true);
        const [usuarios, setUsuarios] = useState([]);
        const [textoBoton, setTextoBoton] = useState('Agregar Nuevo');
        const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
        const [loading, setLoading] = useState(false);
      
        useEffect(() => {
          console.log('consulta', ejecutarConsulta);
          setLoading(true);
          if (ejecutarConsulta) {
            obtenerUsuario(
              (response) => {
                console.log('la respuesta que se recibio fue', response,);
                setUsuarios(response.data);
                setLoading(false);
              },
              (error) => {
                console.error('Salio un error:', error);
                setLoading(false);
              }
            );
            setEjecutarConsulta(false);
          }
        }, [ejecutarConsulta]);
      
        useEffect(() => {
          //obtener lista de usuarios desde el backend
          if (mostrarTabla) {
            setEjecutarConsulta(true);
          }
        }, [mostrarTabla]);
      
        useEffect(() => {
          if (mostrarTabla) {
            setTextoBoton('Agregar Nuevo');
            
          } else {
            setTextoBoton('Mostrar Todos');
            
          }
        }, [mostrarTabla]);
        return (
          <div className='flex  flex-col items-center justify-start p-56  '>
            <div className='flex flex-col p-10'>
              <h2 className='text-3xl font-extrabold text-gray-200'>
                Gestión de usuarios
              </h2>
              <div className = "flex flex-col ">
              <button onClick={() => {setMostrarTabla(!mostrarTabla);}}className=" shadow-md bg-black border border-black font-semibold text-gray-200 p-2 rounded m-6" >
                {textoBoton}
              </button>
              </div>
            </div>
            {mostrarTabla ? (
              <TablaUsuarios loading={loading} listausuarios={usuarios} />
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
      
      const TablaUsuarios = ({ loading, listausuarios, setEjecutarConsulta }) => {
        useEffect(() => {
          console.log('este es el listado de usuarios en el componente de tabla', listausuarios);
        }, [listausuarios]);
        const [busqueda, setBusqueda] = useState('');
        const [usuariosFiltrados, setUsuariosFiltrados] = useState(listausuarios);
      
        useEffect(() => {
          setUsuariosFiltrados(
            listausuarios.filter((elemento) => {
              return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
          );
        }, [busqueda, listausuarios]);
        return (

        
          <div className='flex flex-col items-center justify-center'>
                <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2  px-2 py-1 my-1 my-6 self-start rounded-md focus:outline-none focus:border-gray-700'
            /> 
            {loading?(
            <ReactLoading type='bubbles' color='#111827' height={667} width={375} />
        ) : (
          <table className="tabla ">
          <thead>
            <tr>
              <th className="bg-indigo-900 text-gray-200   "> Nombre</th>
              <th className="bg-indigo-900 text-gray-200  "> Correo</th>
              <th className="bg-indigo-900 text-gray-200  "> Estado</th>
              <th className="bg-indigo-900 text-gray-200  "> Rol</th>
              <th className="bg-indigo-900 text-gray-200  ">Modificar</th>  
            </tr>
          </thead>
          <tbody>
            
          {usuariosFiltrados.map((usuario,user) => {
              return (
              <FilaUsuario
                key={nanoid()}
                usuario={usuario}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })} 
          </tbody>
        </table>
        )}
            
            <div className='flex flex-col w-full m-2 md:hidden'>
              {usuariosFiltrados.map((el) => {
              return (
                <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                  <span>{el.estado}</span>
                  <span>{el.rol}</span>   
                </div>
              );
              })}
              </div>
            </div>
        );
      };

      const FilaUsuario= ({ usuario, setEjecutarConsulta }) => {
        const [edit, setEdit] = useState(false);
        
        const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
          _id: usuario._id,
          rol: usuario.rol,
          estado: usuario.estado,
        });
      
        const actualizarUsuario = async () => {
          //enviar la info al backend
          await editarUsuario(
            usuario._id,
            {
              rol: infoNuevoUsuario.rol,
              estado: infoNuevoUsuario.estado,
          
            },
            (response) => {
              console.log(response.data);
              toast.success('Usuario modificado con éxito');
              setEdit(false);
              setEjecutarConsulta(true);
            },
            (error) => {
              //toast.error('Error modificando el producto');
              console.error(error);
            }
          );
        };
  
      
        return (
          <tr>
            {edit ? (
              <>               
                
                <td>
                {usuario.name}{usuario.nombre}
                </td>
                <td>
                {usuario.email}{usuario.correo}
                </td>
                <td>
                <label className='flex flex-col py-2 text-black  font-semibold'>
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  value={infoNuevoUsuario.estado}
                    onChange={(e) =>
                      setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })
                    }>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>Pendiente</option>
                  <option>Autorizado</option>
                  <option>No Autorizado</option>
                </select>
              </label>
                </td>
                <td>
                <label className='flex flex-col py-2 text-black  font-semibold'>
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  value={infoNuevoUsuario.rol}
                    onChange={(e) =>
                      setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })
                    }>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </select>
              </label>
                  
                </td>
              </>
            ) : (
              <>               
                
                <td>{usuario.name}{usuario.nombre}</td>
                <td>{usuario.email}{usuario.correo}</td>
                <td>{usuario.estado} </td>
                <td>{usuario.rol}</td>
              </>
            )}
            <td>
              <div className='flex w-full justify-around'>
                {edit ? (
                  <>
                    
                      <i
                        onClick={() => actualizarUsuario()}
                        className='fas fa-check text-green-700 hover:text-green-500'
                      />
                    <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
                    
                  </>
                ) : (
                  <>
                    
                      <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                      />
                    
                    
                  </>
                )}
              </div>
              
            </td>
          </tr>
        );
      };
      
      const FormularioCreacionUsuarios = ({ setMostrarTabla, listausuarios, setusuarios }) => {
        const form = useRef(null);
      
        const submitForm = async (e) => {
          e.preventDefault();
          const fd = new FormData(form.current);
      
          const nuevousuario = {};
          fd.forEach((value, key) => {
            nuevousuario[key] = value;
          });
      
          await crearUsuario(
            {
              nombre: nuevousuario.nombre,
              rol: nuevousuario.rol,
              estado: nuevousuario.estado,
              correo: nuevousuario.correo,
            },
            (response) => {
              console.log(response.data);
              toast.success('Usuario agregado con éxito');
            },
            (error) => {
              console.error(error);
              toast.error('Error creando un usuario');
            }
          );
            setMostrarTabla(true);
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
                  
                  />
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='correo'>
                Correo
                <input
                  name='correo'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  
                  />
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
                className='col-span-2 py-3 bg-black font-semibold  text-gray-200 p-2 rounded shadow-md'
              >
                Guardar
              </button>
            </form>
          </div>
        );
      };

export default Usuarios
