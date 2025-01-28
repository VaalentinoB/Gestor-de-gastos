import React from "react";
import { GlobalProvider } from "./context/GlobalState.jsx";
import {Header} from "./context/Header.jsx";
import {Balance} from "./context/Balance.jsx";
import { TransaccionForm } from "./context/TransaccionForm.jsx";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance/> 
      <TransaccionForm/>
      <h1>App</h1>
      </GlobalProvider>
  );
}

export default App;