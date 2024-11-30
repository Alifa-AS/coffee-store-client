import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import MainLayout from './Components/MainLayout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />
  },
  {
    path: "addCoffee",
    element: <AddCoffee />
  },
  {
    path: "updateCoffee",
    element: <UpdateCoffee />
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)