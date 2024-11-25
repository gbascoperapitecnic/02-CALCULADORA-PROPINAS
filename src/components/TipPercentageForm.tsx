const tipOptions = [
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

export default function TipPercentageForm() {
  return (
    <div className="mt-3">
        <h2 className="font-bold text-xl">Propina: </h2>
    
        <form action="">
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2">
                    <label htmlFor="">{tip.label}</label>
                    <input 
                        id={tip.id}
                        name="tip"
                        type="radio" 
                        value={tip.value}
                    />
                </div>
            ))}
        </form>
    </div>

  )
}
