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

    const [state,setState] = useReducer(AppReducer,[]);
    return (
        <Context.Provider value={{
            state,
            setState,
        }}>
            {children} 
        </Context.Provider>
    );
};
