/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/layout/Layout';
import {Home , About , Erorrpage , Servies ,OurWork , Contact , SingleProduct} from "./components/pages/index"
import { toast } from "react-toastify";
import Loading from "./components/loading/Loading";
const App = () => {

 


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<Erorrpage />,
    children:[
      {
       element:<Suspense fallback={<Loading />}><Home /></Suspense> ,
        index:true,
        
      },
      {
        path:"about",
        element:<Suspense fallback={<Loading />}> <About/></Suspense>
        
      },
      {
        path:"servies",
        element: <Suspense fallback={<Loading />}> <Servies /></Suspense> 
        
      },
      {
        path:"our-work",
        element:<Suspense fallback={<Loading />}>  <OurWork /></Suspense> 
        
      },
      {
        path:"contact",
        element:<Suspense fallback={<Loading />}>  <Contact /></Suspense>  
        
      },
      {
        path:"SingleProduct/:id",
        element:<Suspense fallback={<Loading />}>  <SingleProduct /></Suspense>  
        
      },
    ]

  },
])
  return (
    <React.Fragment>
    <RouterProvider  router={router}/>
    </React.Fragment>
  );
}

export default App;
