import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Notfound from './components/NotFound'
import Shop from './components/Shop'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'shop', element: <Shop /> },

    ]
  },
  { path: '*', element: <Notfound /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
