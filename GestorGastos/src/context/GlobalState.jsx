import { createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer.jsx";
export const Context = createContext();


const inicialState = {
    transactions: [],
}
export const useGlobalState = () => {
   const context = useContext(Context) 

   return context;
}

export const GlobalProvider = ({ children }) => {

    const [state,setState] = useReducer(AppReducer,inicialState);
    
    const addTransaction = () => {
        console.log("ADD TRANSACTION");
        
    };
    
    return (
        <Context.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
            {children} 
        </Context.Provider>
    );
};
