import { useState } from "react";
import type { itemMenu, OrderItem } from "../types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])

    //funcion para añadir orden
    const addItem = (item: itemMenu) => {
        //añadir la orden seleccionada a order
        // console.log(item)
        const itemExists = order.findIndex((orden) => orden.id === item.id)
        
        //evitar duplicados
        if (itemExists === -1) {
            // Castear tipo de dato 
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }else{
            // si existe el elemento, actualizar cantidad en el array 
            const updatedOrder = [...order]
            updatedOrder[itemExists].quantity++
            setOrder(updatedOrder)
        }        

    }

    console.log(order)

    // retornamos un objeto
    return{
        order,
        addItem
    }
}
