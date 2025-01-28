import React from "react";
import { GlobalProvider } from "./context/GlobalState.jsx";
import {Header} from "./context/Header.jsx";
import {Balance} from "./context/Balance.jsx";
import {Transaccion} from "./context/Transaccion.jsx";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance/> 
      <Transaccion/>
      <h1>App</h1>
      </GlobalProvider>
  );
}

export default App;