import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/home';
import PORTFOLIO from './Components/PORTFOLIO';
import About from './Components/about';
import Contact from './Components/contact';
import './App.css';
import Notfount from './Components/notfount';

export default function App(){

  const routers= createBrowserRouter(
    [
      {
        path:'', element:<Layout /> ,  children: [
          {path:'', element:<Home />},
          {path:'project', element:<Home />},
          {path:'about', element:<About />},
          { path:'PORTFOLIO', element:<PORTFOLIO />},
          {path:'contact', element: <Contact />},
          {path:'*', element: <Notfount />},
        ]  
      }
    ]
  )
    return (
      <>
      <RouterProvider  router={routers}></RouterProvider>
      </>
    )
}