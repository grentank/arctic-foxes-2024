/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import AccountPage from './components/pages/AccountPage';
import OneMessagePage from './components/pages/OneMessagePage';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import Loader from './components/hoc/Loader';
import useAuth from './hooks/useAuth';
import UserContext from './contexts/UserContext';
import { getAllMessages, getMyMessages } from './loaders';

function App() {
  const {
    user, loginHandler, logoutHandler, signupHandler,
  } = useAuth();

  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          // loader: getAllMessages,
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/login',
              element: <LoginPage />,
            },
            {
              path: '/signup',
              element: <SignupPage />,
            },
          ],
        },
        {
          path: '/account',
          // loader: getMyMessages,
          element: (<ProtectedRoute isAllowed={!!user} redirectPath="/login"><AccountPage /></ProtectedRoute>),
        },
        {
          path: '/messages/:mid',
          element: <OneMessagePage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <UserContext.Provider value={{
      user, loginHandler, logoutHandler, signupHandler,
    }}
    >
      <Loader isLoading={user === undefined}>
        <RouterProvider router={router} />
      </Loader>
    </UserContext.Provider>
  );
}

export default App;
