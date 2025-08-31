import { Minus, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function QuantityControl() {
  return (
    <div className="flex items-center justify-center gap-4 text-neutral-900">
      <div className="flex h-8 w-18 items-center justify-center rounded-[5px] bg-neutral-300">
        <Button
          variant="ghost"
          size="icon"
          className="flex-1 hover:h-7 hover:w-7 hover:bg-amber-500"
        >
          <Minus size={15} />
        </Button>
        <span className="w-6 text-center">3</span>
        <Button
          variant="ghost"
          size="icon"
          className="flex-1 hover:h-7 hover:w-7 hover:bg-amber-500"
        >
          <Plus size={15} />
        </Button>
      </div>
      <Button className="h-8 w-23 rounded-[5px] bg-neutral-300 text-xs text-neutral-900">
        <Trash2 size={20} />
        Remover
      </Button>
    </div>
  )
}
