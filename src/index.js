import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./pages/About";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "<h1>Error 404 \"Not Found\"</h1>",
  },

  {
    path: "/Home",
    element: <App />,
    errorElement: "<h1>Error 404 \"Not Found\"</h1>",
  },

  {
    path: "/About",
    element: <About />,
    errorElement: "<h1>Error 404 \"Not Found\"</h1>",
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);