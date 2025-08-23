import { ShoppingBasket } from 'lucide-react'

import productOne from '@/assets/product-1.jpg'
import productTwo from '@/assets/product-2.jpg'
import productThree from '@/assets/product-3.jpg'
import productFour from '@/assets/product-4.jpg'
import productFive from '@/assets/product-5.jpg'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export function CakeList() {
  return (
    <div className="space-y-3">
      <h2>Descubra a doçura dos nossos cakes.</h2>
      <div className="flex">
        <div className="flex w-3xs flex-col items-center space-y-2 px-3 py-6">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-1">
            <img
              className="h-full w-full rounded-full object-cover"
              src={productTwo}
              alt="bolos"
            />
          </div>
          <Badge variant="secondary" className="bg-blue-300 text-xs uppercase">
            Mais pedidos
          </Badge>

          <p>Cakes tradição</p>
          <span className="max-w-sm text-center text-xs text-neutral-500">
            O tradicional café feito com água quente e grãos moídos
          </span>
          <div className="mt-4 flex h-7 items-center gap-2">
            <span>R$ 9,90</span>
            <span className="flex h-full w-16 items-center justify-center rounded-[5px] bg-neutral-300 text-neutral-900">
              - 1 +
            </span>
            <Button variant="ghost" className="h-full bg-purple-900">
              <ShoppingBasket size={20} />
            </Button>
          </div>
        </div>
        <div className="flex w-3xs flex-col items-center space-y-2 px-3 py-6">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-1">
            <img
              className="h-full w-full rounded-full object-cover"
              src={productOne}
              alt="bolos"
            />
          </div>
          <Badge variant="secondary" className="bg-blue-300 text-xs uppercase">
            Mais pedidos
          </Badge>

          <p>Cakes tradição</p>
          <span className="max-w-sm text-center text-xs text-neutral-500">
            O tradicional café feito com água quente e grãos moídos
          </span>
          <div className="mt-4 flex h-7 items-center gap-2">
            <span>R$ 9,90</span>
            <span className="flex h-full w-16 items-center justify-center rounded-[5px] bg-neutral-300 text-neutral-900">
              - 1 +
            </span>
            <Button variant="ghost" className="h-full bg-purple-900">
              <ShoppingBasket size={20} />
            </Button>
          </div>
        </div>
        <div className="flex w-3xs flex-col items-center space-y-2 px-3 py-6">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-1">
            <img
              className="h-full w-full rounded-full object-cover"
              src={productThree}
              alt="bolos"
            />
          </div>
          <Badge variant="secondary" className="bg-blue-300 text-xs uppercase">
            Mais pedidos
          </Badge>

          <p>Cakes tradição</p>
          <span className="max-w-sm text-center text-xs text-neutral-500">
            O tradicional café feito com água quente e grãos moídos
          </span>
          <div className="mt-4 flex h-7 items-center gap-2">
            <span>R$ 9,90</span>
            <span className="flex h-full w-16 items-center justify-center rounded-[5px] bg-neutral-300 text-neutral-900">
              - 1 +
            </span>
            <Button variant="ghost" className="h-full bg-purple-900">
              <ShoppingBasket size={20} />
            </Button>
          </div>
        </div>
        <div className="flex w-3xs flex-col items-center space-y-2 px-3 py-6">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-1">
            <img
              className="h-full w-full rounded-full object-cover"
              src={productFour}
              alt="bolos"
            />
          </div>
          <Badge variant="secondary" className="bg-blue-300 text-xs uppercase">
            Mais pedidos
          </Badge>

          <p>Cakes tradição</p>
          <span className="max-w-sm text-center text-xs text-neutral-500">
            O tradicional café feito com água quente e grãos moídos
          </span>
          <div className="mt-4 flex h-7 items-center gap-2">
            <span>R$ 9,90</span>
            <span className="flex h-full w-16 items-center justify-center rounded-[5px] bg-neutral-300 text-neutral-900">
              - 1 +
            </span>
            <Button variant="ghost" className="h-full bg-purple-900">
              <ShoppingBasket size={20} />
            </Button>
          </div>
        </div>
        <div className="flex w-3xs flex-col items-center space-y-2 px-3 py-6">
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-1">
            <img
              className="h-full w-full rounded-full object-cover"
              src={productFive}
              alt="bolos"
            />
          </div>
          <Badge variant="secondary" className="bg-blue-300 text-xs uppercase">
            Mais pedidos
          </Badge>

          <p>Cakes tradição</p>
          <span className="max-w-sm text-center text-xs text-neutral-500">
            O tradicional café feito com água quente e grãos moídos
          </span>
          <div className="mt-4 flex h-7 items-center gap-2">
            <span>R$ 9,90</span>
            <span className="flex h-full w-16 items-center justify-center rounded-[5px] bg-neutral-300 text-neutral-900">
              - 1 +
            </span>
            <Button variant="ghost" className="h-full bg-purple-900">
              <ShoppingBasket size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
