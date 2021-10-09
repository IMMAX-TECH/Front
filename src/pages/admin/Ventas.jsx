import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';
//import axios from "axios";

const ventasBackend = [
  {
    factura: '001',
    producto: 'Procesador 1',
    fecha: 2020,
    valor: 230,
    
  },
  {
    factura: '030',
    producto: 'Procesador 3',
    fecha: 2010,
    valor: 400,
    
  },
  {
    factura: '007',
    producto: 'Procesador 6',
    fecha: 2021,
    valor: 1500,
   
  },


  
  
];

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Agregar Nueva Venta');
  

  useEffect(() => {
    //obtener lista de ventas desde el backend
    setVentas(ventasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Agregar Nueva Venta');
      
    } else {
      setTextoBoton('Mostrar Todas Las Ventas');
      
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

const TablaVentas = ({ listaVentas }) => {
  useEffect(() => {
    console.log('este es el listado de ventas en el componente de tabla', listaVentas);
  }, [listaVentas]);

  const [busqueda, setBusqueda] = useState('');
        const [ventasFiltradas, setVentasFiltrados] = useState(listaVentas);

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
            <th className="bg-green-900 text-gray-200  ">Precio </th>
            <th className="bg-green-900 text-gray-200  ">Acciones</th>  
          </tr>
        </thead>
        <tbody>
          {ventasFiltradas.map((venta) => {
            return (
              <tr key={nanoid()}>
                <td className=" text-center text-gray-800">{venta.factura}</td>
                <td className=" text-center text-gray-800">{venta.producto}</td>
                <td className=" text-center text-gray-800">{venta.valor}</td>
                <td>
                  <div className="flex w-full justify-around text-gray-800 ">
                    <i className="fas fa-edit hover:text-yellow-600"/>
                    <i class="fas fa-trash hover:text-red-500"/>
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

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevoVenta = {};
    fd.forEach((value, key) => {
      nuevoVenta[key] = value;
    });

    setMostrarTabla(true);
    
    toast.success('Venta Agregada Exitosamente');
    
  };

  return (
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