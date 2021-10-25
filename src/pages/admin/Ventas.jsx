import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
import { obtenerVenta, crearVenta, editarVenta} from 'utils/api';

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Agregar Venta');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVenta(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setVentas(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);
  

  useEffect(() => {
    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Agregar Venta');
      
    } else {
      setTextoBoton('Mostrar Todas ');
      
    }

  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-56'>
      <div className='flex flex-col p-10'>
        <h2 className='text-3xl font-extrabold text-gray-200'>
          Administración de Ventas
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`shadow-md bg-black  text-gray-300 p-2 rounded m-6  self-center`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVentas listaVentas={ventas} />
      ) : (
        <FormularioCreacionVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
  useEffect(() => {
    console.log('este es el listado de ventas en el componente de tabla', listaVentas);
  }, [listaVentas]);

  const [busqueda, setBusqueda] = useState('');
        const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltrados(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);
  return (
    <div className='flex flex-col items-center justify-center'>
       <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2  px-2 py-1 my-6 self-start rounded-md focus:outline-none focus:border-gray-700'
            /> 
      <table className="tabla rounded">
        <thead>
          <tr>
            <th className="bg-green-900 text-gray-200  "> Factura</th>
            <th className="bg-green-900 text-gray-200  "> Producto</th>
            <th className="bg-green-900 text-gray-200  "> Vendedor</th>
            <th className="bg-green-900 text-gray-200  "> Precio</th>
            <th className="bg-green-900 text-gray-200  "> Acciones</th>  
          </tr>
        </thead>
        <tbody>
              {ventasFiltrados.map((venta) => {
                  return (<FilaVenta
                    key={nanoid()}
                    venta={venta}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })} 
        </tbody>
      </table>
      <div className='flex flex-col w-full m-2 md:hidden'>
           {ventasFiltrados.map((el) => {
             return (
               <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'> 
                 <span>{el.producto}</span>
                 <span>{el.vendedor}</span>
                 <span>{el.precio}</span>
               </div>
             );
           })}
           </div>
    </div>
  );
};

      const FilaVenta= ({ venta, setEjecutarConsulta }) => {
        const [edit, setEdit] = useState(false);
        
        const [infoNuevoVenta, setInfoNuevoVenta] = useState({
          _id: venta._id,
          producto: venta.producto,
          vendedor: venta.vendedor,
          precio: venta.precio,
        });
      
        const actualizarVenta = async () => {
          //enviar la info al backend
          await editarVenta(
            venta._id,
            {
              producto: infoNuevoVenta.producto,
              vendedor: infoNuevoVenta.vendedor,
              precio: infoNuevoVenta.precio,
              
            },
            (response) => {
              console.log(response.data);
              toast.success('Venta modificada con éxito');
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
              <><>
                <td>
                </td>
                <td>
                <label className='flex flex-col py-2 text-black  font-semibold'>
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  value={infoNuevoVenta.producto}
                    onChange={(e) => setInfoNuevoVenta({ ...infoNuevoVenta, producto: e.target.value })}>
                  <option disabled value={0}>
                    Elija una Opción
                  </option>
                  <option>Producto 1</option>
                  <option>Producto 2</option>
                  <option>Producto 3</option>
                  <option>Producto 4</option>
                  <option>Producto 5</option>
                  <option>Producto 6</option>
                </select>
              </label>
                </td>
                <td>
                <label className='flex flex-col py-2 text black  front-semibold'>
                <select
                  className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
                  value={infoNuevoVenta.vendedor}
                    onChage={(e) => 
                      setInfoNuevoVenta({ ...infoNuevoVenta, vendedor: e.target.value }) 
                      }>
                     <option disabled value={0}>
                       Elija una opción
                     </option>
                     <option>Vendedor 1</option>
                     <option>Vendedor 2</option>
                </select>
                </label>
              </td>
                </>
                <td>
                
                <input
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                    type='number'
                    value={infoNuevoVenta.precio}
                    onChange={(e) => setInfoNuevoVenta({ ...infoNuevoVenta, precio: e.target.value })} 
                  />
                </td>
              </>          
              
            ) : (
              <>
               
               <td>{venta.factura}</td>
                <td>{venta.producto}</td>
                <td>{venta.vendedor}</td>
                <td>{venta.precio}</td>
               
              </>
            )}
            <td>
              <div className='flex w-full justify-around'>
                {edit ? (
                  <>
                    
                      <i
                        onClick={() => actualizarVenta()}
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

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    await crearVenta(
      {
        producto: nuevaVenta.producto,
        vendedor: nuevaVenta.vendedor,
        precio: nuevaVenta.precio,
      
      },
      (response) => {
        console.log(response.data);
        toast.success('Venta agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando una Venta');
      }
    );
     setMostrarTabla(true);
   };

  

  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold pb-4 text-gray-200'>Nueva Venta</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col justify-center text-center'>
        <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='factura'>
          Número de Factura
          <input
            name='factura'
            className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
            type='number'
            required/>
        </label>
        <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='producto'>
          Producto
          <select
            className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
            name='producto'
            required
            defaultValue={0}>
            <option disabled value={0}>
              Elija una Opción
            </option>
            <option>Producto 1</option>
            <option>Producto 2</option>
            <option>Producto 3</option>
            <option>Producto 4</option>
            <option>Producto 5</option>
            <option>Producto 6</option>
          </select>
        </label>
        <label className='flex flex-col py-2 text-blac   front-seibold' htmlFor='vendedor'>
          Vendedor
          <select
           className= 'bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
           name='vendedor'
           required
           defaultValue={0}>   
           <option disabled value={0}>
             Elija una Opción
           </option>
           <option>Vendedor 1</option>
           <option>Vendedor 2</option>
           <option>Vendedor 3</option>
          </select>
        </label>

       
        <label className='flex flex-col py-2 text-black  font-semibold' htmlFor='precio'>    
          Precio de Venta
          <input
            name='precio'
            className='bg-gray-50 border border-gray-200 p-2 rounded-lg m-2'
            type='number'
            min={0}
            max={1500}
            required/>
        </label>
        
        <button
          type='submit'
          className='col-span-2 py-3 bg-black font-semibold  text-gray-200 p-2 rounded shadow-md'
        >
          Guardar Venta
        </button>
      </form>
    </div>
  );
};  

export default Ventas;