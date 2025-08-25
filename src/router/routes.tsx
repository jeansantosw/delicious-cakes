import { createBrowserRouter } from 'react-router-dom'

import { ShoppingCart } from '@/pages/shopping-cart/shopping-cart'

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
      {
        path: '/meus-cakes',
        element: <ShoppingCart />,
      },
    ],
  },
])
