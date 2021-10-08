import React from 'react';
import { Link } from 'react-router-dom';

//imagenes
import logo from '../media/logo.png';


const Index = () => {
  return <div>
    <section id="banner">
            <div className="caja1 bg-blue-900 flex block flex-col pt-16 pb-32  content-center items-center justify-center">
                <div ><img src={logo} alt="logo" width="220" /></div>
                <h2 className="mt- py-2 text-5xl font-bold text-gray-100">IMMAX TECH Ingreso</h2>
                <div>
          <Link to='/login'>
            <a href="#" className="inline-block items-center transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-sign-in-alt w-6"></i>Acceder</a>
          </Link>
        </div>
            </div>    
        </section>

       
      
       
   

      

                

  </div>;
};

export default Index;
