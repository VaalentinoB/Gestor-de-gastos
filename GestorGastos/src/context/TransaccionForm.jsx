import { useState } from "react";

export function TransaccionForm() {
    const [descripcion, setDescripcion] = useState();
    return (
        <div>
            <form>
                <input type="text" placeholder="Ingresa Descripcion" />
                <input type="number" step={1} placeholder="Ingresa el monto" />
                <button>Agregar transaccion </button>
            </form> 
        </div>
    );
}

