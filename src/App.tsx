import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {order, addItem} = useOrder()

  return (
    <>
      <header className="bg-black text-white py-5">
        <h1 className="text-4xl text-center">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-16 grid sm:grid-cols-2 gap-10">
        <div className="">
          <h2 className="text-4xl font-medium">Menú</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map((item) =>
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )}
          </div>
        </div>

        <div className="border rounded-md p-2">
          <OrderContents
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App
