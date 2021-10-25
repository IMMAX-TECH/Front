import axios from 'axios';

const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`
}

export const obtenerProducto = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'https://nameless-castle-28783.herokuapp.com/equipos/', 
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://nameless-castle-28783.herokuapp.com/equipos/',
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://nameless-castle-28783.herokuapp.com/equipos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `https://nameless-castle-28783.herokuapp.com/equipos/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};







// CRUD PARA USUARIOS

export const obtenerUsuario = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'https://nameless-castle-28783.herokuapp.com/usuarios/',
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerUsuario1 = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'https://nameless-castle-28783.herokuapp.com/usuarios/',
    headers: {
      Authorization : getToken (),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://nameless-castle-28783.herokuapp.com/usuarios/self/',
    headers: {
      Authorization: getToken(), 
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://nameless-castle-28783.herokuapp.com/usuarios/',
    headers: { 'Content-Type': 'application/json' ,Authorization : getToken ()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://nameless-castle-28783.herokuapp.com/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization : getToken () },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};






// CRUD DE VENTAS

export const obtenerVenta = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'https://nameless-castle-28783.herokuapp.com/ventas/' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'https://nameless-castle-28783.herokuapp.com/ventas/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta= async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://nameless-castle-28783.herokuapp.com/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `https://nameless-castle-28783.herokuapp.com/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
