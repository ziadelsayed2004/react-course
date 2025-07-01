import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./pages/About";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Error 404 \"Not Found\"",
  },

  {
    path: "/Home",
    element: <App />,
    errorElement: "Error 404 \"Not Found\"",
  },

  {
    path: "/About",
    element: <About />,
    errorElement: "Error 404 \"Not Found\"",
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

serviceWorkerRegistration.register();