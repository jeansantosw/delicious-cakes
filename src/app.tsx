import { RouterProvider } from 'react-router-dom'

import { routes } from './router/routes'

export function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
