import { useState } from "react";
import { useGlobalState } from "./GlobalState";

export function TransaccionForm() {
    const { addTransaction } = useGlobalState();
    const [descripcion, setDescripcion] = useState(""); 
    const [amount, setAmount] = useState(0); 

    const onSubmit = (e) => {
        e.preventDefault();
        
        const newTransaction = {
            id: window.crypto.randomUUID(),
            descripcion,
            amount: Number(amount), 
        };

        addTransaction(newTransaction);
        console.log("Transacción agregada:", newTransaction);

        
        setDescripcion("");
        setAmount(0);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa Descripción"
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="Ingrese monto"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))} // Convertir a número
                />
                <button type="submit">Agregar transacción</button>
            </form>
        </div>
    );
}
