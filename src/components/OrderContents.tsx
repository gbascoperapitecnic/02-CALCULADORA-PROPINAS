// import useOrder from "../hooks/useOrder"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order} : OrderContentsProps) {

    //state derivado
    const isEmpty = order.length === 0  


    return (
        <div>
            <h2 className="text-3xl font-medium">Consumo</h2>
            <div className="">
                {isEmpty ? (
                    <p className="text-center p-3">No hay ordenes a procesar.</p>
                ): (
                
                    order.map((item) => ( 
                        <div key={item.id} className="p-2">
                            <div className="flex justify-between">
                                <span className="text-lg">{item.name} - {formatCurrency(item.price)}</span>
                                <div>
                                    <span className="text-white bg-black rounded-full px-3"> x{item.quantity}</span>
                                </div>
                            </div>
                            <p className="font-semibold">Precio: {formatCurrency(item.price * item.quantity)}</p>
                            
                            <button
                                className="bg-red-700 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
                            >
                                X
                            </button>
                        </div>
                        
                    ))
                
                )}
            </div>    
        </div>
    )
}
