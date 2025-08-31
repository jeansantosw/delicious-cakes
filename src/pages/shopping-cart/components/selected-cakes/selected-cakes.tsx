import cakeSelected from '@/assets/product-2.jpg'
import { Separator } from '@/components/ui/separator'

import { QuantityControl } from '../quantity-control/quantity-control'

export function SelectedCakes() {
  return (
    <div className="mt-4 p-10">
      <div className="flex h-20 w-92 items-center">
        <div className="flex">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-300">
            <img
              src={cakeSelected}
              alt=""
              className="h-full w-full rounded-full border-2 object-cover"
            />
          </div>
          <div className="ml-3 flex flex-col justify-between">
            <span>Cakes tradicional</span>
            <div className="flex gap-2">
              <QuantityControl />
            </div>
          </div>
        </div>
        <div className="mb-10 ml-auto flex">
          <span>R$ 11,89</span>
        </div>
      </div>
      <Separator className="my-4 max-w-92 bg-neutral-700" />
      <div></div>
    </div>
  )
}
