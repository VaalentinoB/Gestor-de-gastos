import { useState } from "react";
import { useGlobalState } from "./GlobalState";

export function TransaccionForm() {
    const {addTransaction} = useGlobalState();
    const [descripcion, setDescripcion] = useState(""); 
    const [amount, setAmount] = useState(0); 

    const onSubmit = (e) => {
        e.preventDefault();
        
        addTransaction({
            id:window.crypto.randomUUID(),
            descripcion,
            amount
        })
       
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa Descripcion"
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          placeholder="0.00"
          value={amount}
        />
                <button type="submit">Agregar transacción</button>
            </form>
        </div>
    );
}
