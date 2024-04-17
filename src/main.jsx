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
import SkinCareProducts from './components/SkinCareProducts.jsx';
import FurnituresProducts from './components/FurnituresProducts.jsx';
import ElectronicsProducts from './components/ElectronicsProducts.jsx';
import LampsProducts from './components/LampsProducts.jsx';
import KitchenProducts from './components/KitchenProducts.jsx';
import ChairsProducts from './components/ChairsProducts.jsx';

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
            element: <FurnituresProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/electronics',
            element: <ElectronicsProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/lamps',
            element: <LampsProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/kitchen',
            element: <KitchenProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/chairs',
            element: <ChairsProducts />,
            errorElement: <PageNotFound />,
          },
          {
            path: '/categories/skincare',
            element: <SkinCareProducts />,
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
