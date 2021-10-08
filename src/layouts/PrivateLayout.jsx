import React from 'react';
import Sidebar from 'components/Sidebar';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Sidebar />
<<<<<<< HEAD
        <main className='bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 flex w-full  overflow-y-scroll items-center justify-center pr-0 '>
=======
        <main className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 flex w-full  overflow-y-scroll items-center justify-center pr-0 '>
>>>>>>> 76e45b9190920c0e5738d17abbc1ced8ce487869
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
