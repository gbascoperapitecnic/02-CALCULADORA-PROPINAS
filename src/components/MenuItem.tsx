import { itemMenu} from "../types"

type MenuItemProps = {
    item: itemMenu
    addItem: (item: itemMenu) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
    
    //extraer additem del hook useOrder
    return (
        <button 
            onClick={() => addItem(item)}
            className="border-2 border-slate-700 w-full text-start flex justify-between rounded-md p-2 hover:bg-slate-200"
        >
            <p>{item.name}</p>
            <p className="font-bold">{item.price} €</p>
        </button>
    )
}
