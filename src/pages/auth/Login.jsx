import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Login = () => {
  
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>

<body>

<main>
      <section className="absolute w-full">
        <div className="absolute top-0 mb-1 pb-2 w-full h-full bg-gray-900" ></div>
          <div className="container mt-3 mb-0 px-4 ">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Iniciar Sesión con:</h6>
                  </div>
                  <div className="btn-wrapper text-center">                   
                    <GoogleLogin
                      clientId="907573097420-aed86ad8phjlgqdbs6l1iuk6jtkehd7k.apps.googleusercontent.com"
                      buttonText="Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />  
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-11 pt-0 ">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Inicia con credenciales</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Correo</label>
                      <input
                        type="email"
                        autoComplete="email"
                        requiredName
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Ejemplo: tucorreo@mail.com"
                        />
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña</label>
                      <input
                        type="password"
                        required
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Escribe aquí tu contraseña"
                        />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input id="customCheckLogin" type="checkbox" class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"/>
                        <span className="ml-2 text-sm font-semibold text-gray-700">Recordar</span>
                      </label>
                    </div>
                    <div class="text-center mt-1 mb-3">
                      <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  m-2 w-full"
                        type="button">
                        <Link to='/admin'>Iniciar Sesión</Link>
                      </button>
                      <div class="mt-2">
                        <a href="#" className="text-gray-500 hover:text-gray-900"><small>¿Olvidó su contraseña?</small></a>
                        <span class="text-gray-300">|</span>
                        <Link to='/registro'>
                          <a href="#" className="text-gray-500 hover:text-gray-900"><small>Regístrate</small></a>
                        </Link>
                      </div>    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>



</body>  
    </>
    
  );
};

export default Login;
