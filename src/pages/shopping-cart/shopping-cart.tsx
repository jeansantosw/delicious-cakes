import { useForm } from 'react-hook-form'

import { DeliveryAddressForm } from './components/delivery-address-form/delivery-address-form'
import { PaymentMethod } from './components/payment-method/payment-method'

export function ShoppingCart() {
  const { register, handleSubmit, watch } = useForm()

  return (
    <div className="flex justify-between">
      <div className="flex-1 space-y-6">
        <h2 className="text-xl">Complete seu pedido</h2>
        <DeliveryAddressForm />
        <PaymentMethod />
      </div>
      <div className="flex-1">
        <h2>Cakes selecionados</h2>
      </div>
    </div>
  )
}
