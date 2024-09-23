import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, About, Projects, Contact } from "./components/index.js";

const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={ <App /> }>
   	<Route path="" element={ <Home /> } />
   	<Route path="/about" element={ <About /> } />
   	<Route path="/projects" element={ <Projects /> } />
   	<Route path="/contact" element={ <Contact /> } />
   </Route>
  )
);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>,
)
