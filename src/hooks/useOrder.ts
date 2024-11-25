import { useState } from "react";
import type { itemMenu, OrderItem } from "../types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

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

    // Eliminar orden de lista consumo
    const removeItem = (id:itemMenu["id"]) => {
        // console.log("eliminando")
        //filtrar array order, excluyendo item seleccionado y volver a setear el array 
        const arrayFiltered = order.filter((item) => item.id !== id)
        setOrder(arrayFiltered)
    }

    // funcion para calcular total, subtotal, propina...

    const calcSubtotal = () => {
        const sumTotal = order.reduce((total, item) => total + item.price * item.quantity, 0)
        return sumTotal
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }
    // retornamos un objeto
    return{
        order,
        tip, 
        setTip,
        addItem,
        removeItem,
        calcSubtotal,
        placeOrder
    }
}
