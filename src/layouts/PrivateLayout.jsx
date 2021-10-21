import React from 'react';
import Sidebar from 'components/Sidebar';
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className='flex w-screen h-screen'>
        <div className='flex flex-nowrap h-full w-full'>
          <Sidebar />
       
            <main className='bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 flex w-full  overflow-y-scroll items-center justify-center pr-0 '>
       
            {children}
            </main>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default PrivateLayout;
