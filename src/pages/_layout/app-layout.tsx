import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header/header'

export function AppLayout() {
  return (
    <div className="px-40 py-8">
      <Header />
      <Outlet />
    </div>
  )
}
