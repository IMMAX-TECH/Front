import React from 'react';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      
      <main className='h-full  overflow-y-scroll bg-gray-800 '>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
