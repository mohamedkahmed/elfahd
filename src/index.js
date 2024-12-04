import React ,  { lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './components/context/context.jsx';
import {HelmetProvider} from "react-helmet-async"
import App from "./App"
import "./App.scss"




  const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <AppProvider>
    <HelmetProvider> <App /></HelmetProvider>
        
        <ToastContainer style={{zIndex : "9999999999999"}}  position="top-center" />
  </AppProvider>
    
  </React.StrictMode>
)
