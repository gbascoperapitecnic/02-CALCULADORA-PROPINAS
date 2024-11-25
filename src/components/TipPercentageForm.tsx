import { Dispatch } from "react"

const tipOptions = [
    {
        id: 'tip-0',
        value: 0,
        label: '0%'
    },
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    tip: number
    setTip: Dispatch<React.SetStateAction<number>>
} 

export default function TipPercentageForm({tip, setTip} : TipPercentageFormProps) {
  return (
    <div className="mt-3">
        <h2 className="font-bold text-xl">Propina: </h2>
    
        <form action="">
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor="">{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        name="tip"
                        type="radio" 
                        value={tipOption.value}
                        onChange={(e) => setTip(+(e.target.value))}
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>

  )
}
