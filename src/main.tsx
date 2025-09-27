import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Importa tus componentes .tsx
import App from './App'
import Nosotros from './pages/Nosotros'
import Mensajes from './pages/Mensajes'
import Eventos from './pages/Eventos'
import Dar from './pages/Dar'
import Inicio from './pages/Inicio'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: 'nosotros',
        element: <Nosotros />,
      },
      {
        path: 'mensajes',
        element: <Mensajes />,
      },
      {
        path: 'eventos',
        element: <Eventos />,
      },
      {
        path: 'dar',
        element: <Dar />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)