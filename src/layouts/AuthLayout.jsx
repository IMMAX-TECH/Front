import React from 'react';

import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col  h-screen '>
      
     
      <main className='h-full w-full overflow-y-scroll bg-gradient-to-r from-black via-gray-900 to-gray-800 flex p-4'>{children}
      <div className = "flex flex-col">
       
       <Link to='/'>
            <a href="#" class="inline-block items-end transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-arrow-left w-6"></i>Regresar</a>
        </Link>
    </div>
      </main>
    
      <Footer />
    </div>
   
   
  );
};

export default AuthLayout;
