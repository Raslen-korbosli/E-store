import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import Home from './pages/Home.jsx';
import Categories from './pages/Categories.jsx';
import AllProducts from './components/AllProducts.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Navigate to="home" />,
        errorElement: <PageNotFound />,
      },
      { path: '/home', element: <Home />, errorElement: <PageNotFound /> },
      {
        path: '/categories',
        element: <Categories />,
        errorElement: <PageNotFound />,
        children: [
          {
            path: '/categories/all',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/furnitures',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/electronics',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/lamps',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/kitchen',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/chairs',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/skincare',
            element: <AllProducts />,
            errorElement: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
