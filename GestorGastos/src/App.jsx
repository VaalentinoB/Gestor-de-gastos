import React from "react";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import Header from "./context/Header.jsx";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <h1>App</h1>
      </GlobalProvider>
  );
}

export default App;