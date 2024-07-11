import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Root from './components/root/Root.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
        path: 'portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
