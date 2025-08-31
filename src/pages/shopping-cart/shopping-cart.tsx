import { useForm } from 'react-hook-form'

import { DeliveryAddressForm } from './components/delivery-address-form/delivery-address-form'
import { PaymentMethod } from './components/payment-method/payment-method'
import { SelectedCakes } from './components/selected-cakes/selected-cakes'
import type { TDeliveryAddressForm } from './types'

export function ShoppingCart() {
  const { register, handleSubmit, watch } = useForm<TDeliveryAddressForm>()

  const deliveryAddress = watch([
    'cep',
    'street',
    'houseNumber',
    'complement',
    'neighborhood',
    'city',
    'uf',
  ])

  function handleSubmiPayment(data: TDeliveryAddressForm) {
    console.log(':', data)
  }

  return (
    <div className="flex justify-between">
      <div className="flex-1 space-y-6">
        <h2 className="text-xl">Complete seu pedido</h2>
        <DeliveryAddressForm register={register} />
        <PaymentMethod
          onPaymentClick={handleSubmit(handleSubmiPayment)}
          deliveryAddress={deliveryAddress}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl">Cakes selecionados</h2>
        <SelectedCakes />
      </div>
    </div>
  )
}
