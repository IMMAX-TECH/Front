import React from 'react';
import Sidebar from 'components/Sidebar';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Sidebar />
        <main className='bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 flex w-full  overflow-y-scroll items-center justify-center pr-0 '>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
