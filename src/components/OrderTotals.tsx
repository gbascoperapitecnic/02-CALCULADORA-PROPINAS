import { formatCurrency } from "../helpers";

type OrderTotalProp = {
  calcSubtotal: () => number
  tip: number
  placeOrder: () => void
}

export default function OrderTotals({calcSubtotal, tip, placeOrder}: OrderTotalProp) {
  const subtotal = calcSubtotal()
  const propina = subtotal * tip  

  return (
    <>
      <div className="space-y-3 mt-3 relative">
        <h2 className="text-xl font-bold">Totales y Propina: </h2>

        <p>Subtotal a pagar: {''}
          <span className="font-bold">{formatCurrency(subtotal)}</span>
        </p>
        
        <p>Propina: {''} 
          <span className="font-bold">{formatCurrency(propina)}</span>
        </p>

        <p>Total a pagar: {''} 
          <span className="font-bold">{formatCurrency(subtotal + propina)}</span>
        </p>
      </div>
      <button 
        className="w-full bg-black text-white mt-4 p-2 uppercase font-semibold disabled:opacity-10"
        disabled={(subtotal+propina) == 0}
        onClick={placeOrder}
      >
        Guardar Orden</button>
    </>
  )
}
