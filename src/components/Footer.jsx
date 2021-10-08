import React from 'react';


const Footer = () => {
  return <div>
    <footer>
        <div className="flex flex-col sm:flex-row  justify-center items-center content-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  text-gray-300 w-full h-16 sm:h22 font-thin border-solid">
            <a href="https://github.com/IMMAX-TECH/Front" className="transform hover:translate-y-1 transition-transform ease-in duration-200 mx-11"><i class="fab fa-github w-6"></i>Proyecto Ciclo 3.</a>
            <div className="mx-11"> AXM </div>
        </div>
    </footer>
  </div>;
};

export default Footer;
