import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer.jsx";

export const Context = createContext();

const initialState = {
    transactions: [],
};


export const useGlobalState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalState debe usarse dentro de un GlobalProvider");
    }
    return context;
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addTransaction = (transaction) => {
        dispatch({  
            type: "ADD_TRANSACCION",
            payload: transaction
        });
    };

    return (
        <Context.Provider value={{ transactions: state.transactions, addTransaction }}>
            {children}
        </Context.Provider>
    );
};
