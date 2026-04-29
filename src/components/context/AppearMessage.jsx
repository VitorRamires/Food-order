import { Children, createContext, useRef, useState } from "react";

export const AppearMessageContext = createContext();

export function AppearMessageProvider({ children }) {
  const [showMsg, setShowMsg] = useState(false);
  const timeout = useRef();

  function addMealMessage() {
    clearTimeout(timeout.current);
    setShowMsg(true);
    timeout.current = setTimeout(() => {setShowMsg(false)}, 2000);
    
  }

  return (
    <AppearMessageContext.Provider
      value={{ showMsg, setShowMsg, addMealMessage }}
    >
      {children}
    </AppearMessageContext.Provider>
  );
}
