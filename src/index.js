import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./pages/about";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);