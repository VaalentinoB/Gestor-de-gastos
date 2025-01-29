import { useState } from "react";
import { useGlobalState } from "./GlobalState";

export function TransaccionForm() {
    const {addTransaction} = useGlobalState();
    const [descripcion, setDescripcion] = useState(""); 
    const [amount, setAmount] = useState(0); 

    const onSubmit = (e) => {
        e.preventDefault();
        
        
        if (!descripcion.trim()) {
            alert("Por favor, ingresa una descripción válida.");
            return;
        }

        if (amount === 0 || isNaN(amount)) {
            alert("Por favor, ingresa un monto válido.");
            return;
        }

        console.log("Descripción:", descripcion);
        console.log("Monto:", amount);

        // Limpia los campos después de enviar
        setDescripcion("");
        setAmount(0);
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
