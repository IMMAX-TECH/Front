import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';


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
              <button onClick={() => {setMostrarTabla(!mostrarTabla);}}className=" shadow-md bg-blue-900 border border-black font-semibold text-gray-200 p-2 rounded m-6" >
                {textoBoton}
              </button>
              </div>
            </div>
            {mostrarTabla ? (
              <TablaProductos listaProductos={productos} />
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
      
      const TablaProductos = ({ listaProductos }) => {
        useEffect(() => {
          console.log('este es el listado de productos en el componente de tabla', listaProductos);
        }, [listaProductos]);
        return (

        
          <div className='flex flex-col items-center justify-center'>
            
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
                {listaProductos.map((producto) => {
                  return (
                    <tr key={nanoid()}>
                      <td className=" text-center text-black">{producto.referencia}</td>
                      <td className=" text-center text-black">{producto.nombre}</td>
                      <td className=" text-center text-black">{producto.marca}</td>
                      <td className=" text-center text-black">{producto.modelo}</td>
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
                  name='factura'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='number'
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='nombre'>
                Nombre
                <input
                  name='factura'
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  type='text'
                  required/>
              </label>
              <label className='flex flex-col py-2 text-black font-semibold' htmlFor='marca'>
                Marca
                <input
                  name='text'
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
                className='col-span-2 py-3 bg-blue-900 font-semibold  text-gray-200 p-2 rounded shadow-md'
              >
                Guardar
              </button>
            </form>
          </div>
        );
      };

export default Productos

