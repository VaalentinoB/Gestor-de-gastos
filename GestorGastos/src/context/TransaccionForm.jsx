import { useState } from "react";
import { useGlobalState } from "./GlobalState";

export function TransaccionForm() {
    const {addTransaction} = useGlobalState();
    const [descripcion, setDescripcion] = useState(""); 
    const [amount, setAmount] = useState(0); 

    const onSubmit = (e) => {
        e.preventDefault();
        
        addTransaction({
            id:1,
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
                    step={1}
                    placeholder="Ingresa el monto"
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} // Convertir a número
                />
                <button type="submit">Agregar transacción</button>
            </form>
        </div>
    );
}
