import { useContext } from "react";
import { useGlobalState } from "./GlobalState.jsx";


export function Balance () {
    const data = useGlobalState();
    return (
        <div>
            <h1>Balance Total</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

