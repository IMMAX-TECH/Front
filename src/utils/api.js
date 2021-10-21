import axios from 'axios';

const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`
}

export const obtenerProducto = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/Equipos/', 
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/Equipos/',
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/Equipos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/Equipos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};







// CRUD PARA USUARIOS

export const obtenerUsuario = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerUsuario1 = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), 
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/usuarios/',
    headers: { 'Content-Type': 'application/json' ,Authorization : getToken ()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};






// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json' ,Authorization : getToken ()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
