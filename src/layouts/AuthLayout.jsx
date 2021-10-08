import React from 'react';
import NavAuth from '../components/NavbarAuth';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavAuth />
      <main className='h-full w-full overflow-y-scroll bg-gradient-to-r from-black via-gray-900 to-gray-800'>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
