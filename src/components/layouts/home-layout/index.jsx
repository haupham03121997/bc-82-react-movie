import { Button } from '@/components/ui/button';
import { PATH } from '@/routes/path';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
export default function HomeLayout({ children }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(PATH.LOGIN);
  };

  const handleRegister = () => {
    navigate(PATH.REGISTER);
  };

  return (
    <div>
      <header className='h-[70px] flex flex-col justify-center items-center  border-b'>
        <div className=' container mx-auto flex items-center justify-between'>
          <p className='font-bold'>CyberSoft</p>
          <div className='flex items-center gap-4'>
            <Button variant='outline' onClick={handleRegister}>
              Đăng ký
            </Button>
            <Button onClick={handleLogin}>Đăng nhập</Button>
          </div>
        </div>
      </header>
      {/* <Outlet /> */}
      {children}
      <footer className='h-[70px]'>Footer</footer>
    </div>
  );
}
