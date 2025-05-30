import { loginAuthApi } from '@/apis/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROLE } from '@/constants/role';
import { PATH } from '@/routes/path';
import { setUser } from '@/store/slices/user';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  });

  const { mutate: loginUser } = useMutation({
    mutationFn: loginAuthApi,
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(setUser(data));
      if (data.maLoaiNguoiDung === ROLE.ADMIN) {
        navigate(PATH.DASHBOARD);
      }
      if (data.maLoaiNguoiDung === ROLE.USER) {
        navigate(PATH.HOME);
      }
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    loginUser(data);
  };

  return (
    <div>
      <form className='min-w-md space-y-3' onSubmit={handleSubmit(onSubmit)}>
        <Input name='taiKhoan' placeholder='Vui lòng nhập tài khoản' {...register('taiKhoan')} />
        <Input name='matKhau' type='password' placeholder='Vui lòng nhập mật khẩu' {...register('matKhau')} />
        <Button type='submit'>Đăng nhập</Button>
      </form>
    </div>
  );
}
