import type { UseFormRegister } from 'react-hook-form'
import z from 'zod'

export const deliveryAddressFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  houseNumber: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
})

export type TDeliveryAddressForm = z.infer<typeof deliveryAddressFormSchema>

export interface IDeliveryAddressForm {
  register: UseFormRegister<TDeliveryAddressForm>
}

export interface IPaymentMethod {
  onPaymentClick: () => void
  deliveryAddress: string[]
}
