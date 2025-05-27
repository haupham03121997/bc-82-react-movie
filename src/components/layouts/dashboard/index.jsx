import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className='w-full flex min-h-screen'>
      <div className='w-[280px] h-full bg-gray-500'>Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
