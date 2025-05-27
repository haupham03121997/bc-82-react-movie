import React from 'react';
import { useRoutes } from 'react-router-dom';
import Homepage from '@/pages/home';
import MovieDetails from '@/pages/movie-details';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import UserManagement from '@/pages/admin/user-management';
import MovieManagement from '@/pages/admin/movie-management';
import { PATH } from './path';
import HomeLayout from '@/components/layouts/home-layout';
import AuthLayout from '@/components/layouts/auth';
import DashboardLayout from '@/components/layouts/dashboard';

export default function useRouterElements() {
  const elements = useRoutes([
    {
      path: PATH.HOME,
      element: (
        <HomeLayout>
          <Homepage />
        </HomeLayout>
      ),
    },
    {
      path: `${PATH.MOVIE_DETAILS}/:id`,
      element: (
        <HomeLayout>
          <MovieDetails />
        </HomeLayout>
      ),
    },
    {
      path: PATH.LOGIN,
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: PATH.REGISTER,
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      ),
    },
    {
      path: PATH.USER_MANAGEMENT,
      element: (
        <DashboardLayout>
          <UserManagement />
        </DashboardLayout>
      ),
    },
    {
      path: PATH.MOVIE_MANAGEMENT,
      element: (
        <DashboardLayout>
          <MovieManagement />
        </DashboardLayout>
      ),
    },
    { path: PATH.NOT_FOUND, element: <div>404 Not Found</div> },
  ]);
  return elements;
}
