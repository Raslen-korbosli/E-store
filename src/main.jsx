import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home />, errorElement: <PageNotFound /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
