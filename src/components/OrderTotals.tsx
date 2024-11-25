import { formatCurrency } from "../helpers";
import { itemMenu, OrderItem } from "../types";

type OrderTotalProp = {
  order: OrderItem[]
  calcSubtotal: () => number
}

export default function OrderTotals({order, calcSubtotal}: OrderTotalProp) {
  const subtotal = calcSubtotal()
  // const tip = 

  return (
    <>
      <div className="space-y-3 mt-3">
        <h2 className="text-xl font-bold">Totales y Propina: </h2>

        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subtotal)}</span>
        </p>
        
        <p>Propina: {''} 
          <span className="font-bold">{}</span>
        </p>

        <p>Total a pagar: {''} 
          <span className="font-bold">{}</span>
        </p>

      </div>

      <button>

      </button>
    </>
  )
}
