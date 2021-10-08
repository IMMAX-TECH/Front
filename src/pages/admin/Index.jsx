import React from 'react';
import perfil from '../../media/profile.jpeg'

const Admin = () => {
  return <div>
        <section className="relative block" style={{ height: "500px" }}>
          <h1 className="pt-20 mb-0 text-xl text-white text-center">¡Bienvenido!</h1>
          <h1 className="pt-8 mb-0 text-5xl font-bold text-white text-center">Panel de Administración</h1>
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <span className=" w-full h-full  opacity-50 "></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
            <svg className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          </div>
        </section>
        <section className="relative py-16 ">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div  className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img alt="..." src={perfil} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}/>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">Administrador</h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>Colombia
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-at mr-2 text-lg text-gray-500"></i>aministrador@mysolutionstech.com
                </div>
              </div>
            </div>
          </div>
        </section>
  
  
  
  
  
  
  
</div>;
};

export default Admin;
