import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Notfound from './pages/Notfound/Notfound.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '*',
    element: <Notfound/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)
