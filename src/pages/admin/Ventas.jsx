import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {nanoid} from 'nanoid';

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
  {
    factura: '021',
    producto: 'Procesador 2',
    fecha: 2017,
    valor: 300,
    
  },
  {
    factura: '066',
    producto: 'Procesador 5',
    fecha: 2012,
    valor: 1200,
    
  },
  {
    factura: '032',
    producto: 'Procesador 4',
    fecha: 2020,
    valor: 800,
    
  },

  {
    factura: '003',
    producto: 'Procesador 2',
    fecha: 2015,
    valor: 300,
    
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
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-800'>
          Administración de Ventas
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`shadow-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-gray-300 p-2 rounded m-6  self-center`}
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
  return (
    <div className='flex flex-col items-center justify-center'>
      
      <table className="tabla rounded">
        <thead>
          <tr>
            <th className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300"> Nº Factura</th>
            <th className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300"> Producto</th>
            <th className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300">Fecha Venta</th>
            <th className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300">Precio USD</th>
            <th className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300">Acciones</th>  
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((venta) => {
            return (
              <tr key={nanoid()}>
                <td className=" text-center text-gray-800">{venta.factura}</td>
                <td className=" text-center text-gray-800">{venta.producto}</td>
                <td className=" text-center text-gray-800">{venta.fecha}</td>
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
    setVentas([...listaVentas, nuevoVenta]);
    toast.success('Venta Agregada Exitosamente');
    
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold pb-4 text-gray-800'>Nueva Venta</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col justify-center text-center'>
        <label className='flex flex-col py-2 text-gray-800' htmlFor='factura'>
          Número de Factura
          <input
            name='factura'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            placeholder='Ej: 001'
            required/>
        </label>
        <label className='flex flex-col py-2 text-gray-800' htmlFor='producto'>
          Producto
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='producto'
            required
            defaultValue={0}>
            <option disabled value={0}>
              Elija una Opción
            </option>
            <option>Procesador 1</option>
            <option>Procesador 2</option>
            <option>Procesador 3</option>
            <option>Procesador 4</option>
            <option>Procesador 5</option>
            <option>Procesador 6</option>
          </select>
        </label>
        <label className='flex flex-col py-2 text-gray-800' htmlFor='fecha'>
          Fecha de Venta
          <input
            name='fecha'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1992}
            max={2022}
            placeholder='Ej: 2014'
            required/>
        </label>
        <label className='flex flex-col py-2 text-gray-800' htmlFor='precio'>    
          Precio de Venta
          <input
            name='precio'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={230}
            max={1500}
            placeholder='Ej: 230'
            required/>
        </label>
        
        <button
          type='submit'
          className='col-span-2 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300 p-2 rounded-full shadow-md hover:bg-blue-600'
        >
          Guardar Venta
        </button>
      </form>
    </div>
  );
};

export default Ventas;