import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../pages/_layout/app-layout'
import { Home } from '../pages/home/home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
