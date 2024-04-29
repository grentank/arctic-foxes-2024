import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import AccountPage from './components/pages/AccountPage';
import OneMessagePage from './components/pages/OneMessagePage';
import axiosInstance, { setAccessToken } from './axiosInstance';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const form = event.target;
    const res = await axiosInstance.post('/auth/login', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
    form.reset();
  };

  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  const routes = [
    {
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <LoginPage loginHandler={loginHandler} />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
        {
          path: '/account',
          element: <AccountPage />,
        },
        {
          path: '/messages/:mid',
          element: <OneMessagePage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
