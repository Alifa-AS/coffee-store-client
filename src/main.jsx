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
import Home from './Components/Layout/Home.jsx';
import HomeLayout from './Components/HomeLayout.jsx';
import SignIn from './Components/Sign/SignIn.jsx';
import SignUp from './Components/Sign/SignUp.jsx';
import AuthProvider from './Components/providers/AuthProvider.jsx';
import Users from './Components/Sign/Users.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <HomeLayout />,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: "addCoffee",
    element: <AddCoffee />
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users'),
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
