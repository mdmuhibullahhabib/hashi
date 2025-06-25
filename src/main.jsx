import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from "./Routes/Router.jsx";
import Authprovider from "./Provider/Authprovider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
         <div className="max--screen-xl mx-auto">
          <RouterProvider router={Router}></RouterProvider>
        </div>
    </Authprovider>
  </StrictMode>,
)
