import { MapPinHouse } from 'lucide-react'

import { Input } from '@/components/ui/input'

import type { IDeliveryAddressForm } from '../../types'

export function DeliveryAddressForm({ register }: IDeliveryAddressForm) {
  return (
    <form className="p-10">
      <div className="flex items-center gap-6 pb-9">
        <MapPinHouse size={30} className="text-amber-400" />
        <div>
          <h2 className="text-xl">Endereço de Entrega</h2>
          <span className="text-xs">
            Informe o endereço onde deseja receber seu produto
          </span>
        </div>
      </div>
      <Input
        id="cep"
        type="text"
        placeholder="CEP"
        autoComplete="off"
        {...register('cep')}
        className="mb-4 h-11 w-50"
      />
      <Input
        id="street"
        type="text"
        placeholder="Rua"
        autoComplete="off"
        {...register('street')}
        className="mb-4 h-11"
      />
      <div className="flex flex-col space-y-4">
        <div className="flex gap-3">
          <Input
            id="houseNumber"
            type="text"
            placeholder="Número"
            autoComplete="off"
            {...register('houseNumber')}
            className="h-11 flex-1"
          />
          <Input
            id="complement"
            type="text"
            placeholder="Complemento"
            autoComplete="off"
            {...register('complement')}
            className="h-11 flex-2"
          />
        </div>
        <div className="flex gap-3">
          <Input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            autoComplete="off"
            {...register('neighborhood')}
            className="h-11 flex-4"
          />
          <Input
            id="city"
            type="text"
            placeholder="Cidade"
            autoComplete="off"
            {...register('city')}
            className="h-11 flex-7"
          />
          <Input
            id="uf"
            type="text"
            placeholder="UF"
            autoComplete="off"
            {...register('uf')}
            className="h-11 flex-1"
          />
        </div>
      </div>
    </form>
  )
}
