// import useOrder from "../hooks/useOrder"
import { formatCurrency } from "../helpers"
import { itemMenu, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id:itemMenu["id"]) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {

    //state derivado
    const isEmpty = order.length === 0  

    return (
        <div>
            <h2 className="text-3xl font-medium">Consumo</h2>
            <div className="mt-5">
                {isEmpty ? (
                    <p className="text-center p-3">No hay ordenes a procesar.</p>
                ): (
                
                    order.map((item) => ( 
                        <div key={item.id} className="p-2 border-gray-200 border-t last-of-type:border-b py-5 ">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className="text-lg">{item.name} - {formatCurrency(item.price)}</span>
                                    <div>
                                        <span className="text-white bg-black rounded-full px-3 py-px"> x{item.quantity}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold">Precio: {formatCurrency(item.price * item.quantity)}</p>
                                    
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="bg-red-700 text-white p-3 rounded-full w-4 h-4 flex items-center justify-center mr-2"
                                    >
                                        X
                                    </button>
                                </div>                            
                            </div>
                        </div>
                        
                    ))
                
                )}
            </div>    
        </div>
    )
}
