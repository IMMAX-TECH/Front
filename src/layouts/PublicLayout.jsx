import React from 'react';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      
      <main className='h-full w-full overflow-y-scroll bg-gradient-to-r from-black via-gray-900 to-gray-800'>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
