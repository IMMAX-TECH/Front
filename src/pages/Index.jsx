import React from 'react';
import logo from '../media/logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Index = () => {
  const { loginWithRedirect } = useAuth0();
  return <div>
    <section >
            <div className="flex flex-col pt-16 pb-32  content-center items-center justify-center">
                
                <h2 className="mt- py-10 text-5xl font-bold text-gray-100">IMMAX TECH Ingreso</h2>
                <div ><img src={logo} alt="logo" width="220" /></div>
                <div>
            <button onClick={() => loginWithRedirect()}>
              <a href="#" className="inline-block items-center transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-sign-in-alt w-6"></i>Acceder</a>
            </button>
        </div>
            </div>    
        </section>                

  </div>;
};

export default Index;
