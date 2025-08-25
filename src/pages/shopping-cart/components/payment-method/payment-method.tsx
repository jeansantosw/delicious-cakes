import { Banknote, CreditCard, DollarSign, Landmark } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function PaymentMethod() {
  return (
    <div className="flex flex-col space-y-8 p-10">
      <div>
        <h3 className="flex font-semibold">
          <DollarSign className="text-purple-800" size={20} /> Pagamento
        </h3>
        <span>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </span>
      </div>
      <div className="flex w-full justify-between">
        <Button className="h-14 w-44 bg-neutral-200 text-xs font-semibold text-neutral-600 uppercase hover:bg-neutral-300">
          {' '}
          <CreditCard size={20} className="text-purple-800" /> Cartão de Crédito
        </Button>
        <Button className="h-14 w-44 bg-neutral-200 text-xs font-semibold text-neutral-600 uppercase hover:bg-neutral-300">
          {' '}
          <Landmark size={20} className="text-purple-800" /> Cartão de Débito
        </Button>
        <Button className="h-14 w-44 bg-neutral-200 text-xs font-semibold text-neutral-600 uppercase hover:bg-neutral-300">
          <Banknote size={20} className="text-purple-800" />
          Dinheiro
        </Button>
      </div>
    </div>
  )
}
