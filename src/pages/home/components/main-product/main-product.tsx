import { CakeSlice, Clock, Lock, Package } from 'lucide-react'

import mainCoke from '@/assets/main-product.jpg'

export function MainProduct() {
  return (
    <div className="flex justify-between py-32">
      <div className="flex w-150 flex-col justify-center space-y-8">
        <h1 className="text-3xl font-semibold">
          Adoce seu dia com os melhores{' '}
          <span className="text-amber-800">cakes</span> e transforme seu dia.
        </h1>
        <p>Refresque seu momento com Coke, entregue onde você estiver.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-amber-950 p-1.5 text-neutral-200">
              <Lock size={20} />
            </span>
            Compra simples e segura
          </p>
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-amber-400 p-1.5 text-neutral-200">
              <Clock size={20} />
            </span>
            Entrega rápida e rastreada
          </p>
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-blue-800 p-1.5 text-neutral-200">
              <Package size={20} />
            </span>
            Embalagem mantém o café intacto
          </p>
          <p className="flex items-center gap-2">
            <span className="rounded-full bg-purple-900 p-1.5 text-neutral-200">
              <CakeSlice size={20} />
            </span>
            O cake chega fresquinho até você
          </p>
        </div>
      </div>
      <div>
        <img
          className="h-100 rounded-tr-full rounded-bl-full"
          src={mainCoke}
          alt=""
        />
      </div>
    </div>
  )
}
