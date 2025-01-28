import { Children, createContext } from "react";

 export const Context = createContext();


 export const GlobalProvider = () => {
    return (
        <Context.Provider value={{total : 100}}>
            {Children}
        </Context.Provider>
    )
 }

 