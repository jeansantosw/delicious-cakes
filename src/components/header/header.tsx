import { ShoppingBasket, User } from 'lucide-react'

import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="flex justify-between py-16">
      <div>LOGO</div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="h-8 bg-purple-900 text-xs font-semibold hover:bg-purple-800 hover:text-neutral-300"
        >
          <User size={20} />
          Jean Santos
        </Button>
        <Button
          variant="ghost"
          className="h-8 bg-purple-900 hover:bg-purple-800 hover:text-neutral-300"
        >
          <ShoppingBasket size={22} />
        </Button>
      </div>
    </header>
  )
}
