export type itemMenu = {
    id: number
    name: string
    price: number
}
export type OrderItem = itemMenu &{
    //extends itemMenu type
    quantity: number
}