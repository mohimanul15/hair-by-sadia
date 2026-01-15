import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Notfound from './pages/Notfound/Notfound.jsx'
import Mainlayout from './layouts/Mainlayout/Mainlayout.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Faq from './pages/Faq/Faq.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '*',
        element: <Notfound />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/faq',
        element: <Faq />
      }
    ]
  },
  {
    path: '*',
    element: <Notfound />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>,
)
