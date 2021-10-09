import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import axios from "axios";




const productosBackend = [
    {
      referencia: '001',
      nombre: 'Producto 1',
      marca: 2020,
      modelo: 230,
      
    },
    {
      referencia: '030',
      nombre: 'Producto 2',
      marca: 2010,
      modelo: 400,
      
    },
   
  
  
   
  
   
    
  ];


const Productos = () => {

        const [mostrarTabla, setMostrarTabla] = useState(true);
        const [productos, setProductos] = useState([]);
        const [textoBoton, setTextoBoton] = useState('Agregar Nuevo');
       

      
        
      
        useEffect(() => {
          setProductos(productosBackend);
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
                Gestión de Productos
              </h2>
              <div className = "flex flex-col ">
              <button onClick={() => {setMostrarTabla(!mostrarTabla);}}className=" shadow-md bg-black border border-black font-semibold text-gray-200 p-2 rounded m-6" >
                {textoBoton}
              </button>
              </div>
            </div>
            {mostrarTabla ? (
              <TablaProductos listaProductos={productos}  />
            ) : (
              <FormularioCreacionProductos
                setMostrarTabla={setMostrarTabla}
                listaProductos={productos}
                setProductos={setProductos}
              />
            )}
            <ToastContainer position='bottom-center' autoClose={5000} />
          </div>
        );
      };
      
      const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
        useEffect(() => {
          console.log('este es el listado de productos en el componente de tabla', listaProductos);
        }, [listaProductos]);
        const [busqueda, setBusqueda] = useState('');
        const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);
      
        useEffect(() => {
          setProductosFiltrados(
            listaProductos.filter((elemento) => {
              return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
          );
        }, [busqueda, listaProductos]);

        return (

        
          <div className='flex flex-col items-center justify-center'>
             <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2  px-2 py-1 my-6 self-start rounded-md focus:outline-none focus:border-gray-700'
            />     
            <table className="tabla ">
              <thead>
                <tr>
                  <th className="bg-blue-900 text-gray-200   "> Referencia</th>
                  <th className="bg-blue-900 text-gray-200  "> Nombre</th>
                  <th className="bg-blue-900 text-gray-200  "> Marca</th>
                  <th className="bg-blue-900 text-gray-200  "> Modelo</th>
                  <th className="bg-blue-900 text-gray-200  ">Modificar</th>  
                </tr>
              </thead>
              <tbody>
                {productosFiltrados.map((producto) => {
                  return (<FilaProducto
                    key={nanoid()}
                    producto={producto}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })}   
                 
              </tbody>
            </table>
          
           <div className='flex flex-col w-full m-2 md:hidden'>
           {productosFiltrados.map((el) => {
             return (
               <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                 <span>{el.referencia}</span>
                 <span>{el.nombre}</span>
                 <span>{el.marca}</span>
                 <span>{el.modelo}</span>
               </div>
             );
           })}
         </div>
       </div>
     );
   };
         
      

      const FilaProducto = ({ producto, setEjecutarConsulta }) => {
        const [edit, setEdit] = useState(false);
        
        const [infoNuevoProducto, setInfoNuevoProducto] = useState({
          _id: producto._id,
          referencia: producto.referencia,
          nombre: producto.nombre,
          marca: producto.marca,
          modelo: producto.modelo,
        });
      
        const actualizarProducto = async () => {
          //enviar la info al backend
          const options = {
            method: 'PATCH',
            url: `http://localhost:5000/Productos/${producto._id}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoProducto },
          };
      
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              toast.success('Producto modificado con éxito');
              setEdit(false);
              setEjecutarConsulta(true);
            })
            .catch(function (error) {
              toast.error('Error modificando el producto');
              console.error(error);
            });
        };
  
      
        return (
          <tr>
            {edit ? (
              <>
               
                <td>
                  
                </td>
                <td>
                  <input
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    value={infoNuevoProducto.nombre}
                    onChange={(e) =>
                      setInfoNuevoProducto({ ...infoNuevoProducto, nombre: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='text'
                    value={infoNuevoProducto.marca}
                    onChange={(e) =>
                      setInfoNuevoProducto({ ...infoNuevoProducto, marca: e.target.value })
                    }
                  />
                </td>
                <td>
                <label className='flex flex-col py-2 text-black  font-semibold'>
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  value={infoNuevoProducto.modelo}
                    onChange={(e) =>
                      setInfoNuevoProducto({ ...infoNuevoProducto, modelo: e.target.value })
                    }>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>Otro</option>
                </select>
              </label>
                  
                </td>
              </>
            ) : (
              <>
               
                <td>{producto.referencia}</td>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>{producto.modelo}</td>
              </>
            )}
            <td>
              <div className='flex w-full justify-around'>
                {edit ? (
                  <>
                    
                      <i
                        onClick={() => actualizarProducto()}
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
      
      const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
        const form = useRef(null);
      
        const submitForm = (e) => {
          e.preventDefault();
          const fd = new FormData(form.current);
          
          const nuevoProducto = {};
          fd.forEach((value, key) => {
            nuevoProducto[key] = value;
          });
      
          setMostrarTabla(true);
          setProductos([...listaProductos, nuevoProducto]);
          toast.success('Venta Agregada Exitosamente');
          
        };
      
        return (
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold pb-4 text-gray-200 '>Nuevo Producto</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col justify-center text-center'>
              <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='referencia'>
                Referencia
                <input
                  name='referencia'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='number'
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='nombre'>
                Nombre
                <input
                  name='nombre'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='marca'>
                Marca
                <input
                  name='marca'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='modelo'>
                Modelo
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  name='modelo'
                  required
                  defaultValue={0}>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>Otro</option>
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

export default Productos

