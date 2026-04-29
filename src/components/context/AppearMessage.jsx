import { Children, createContext, useRef, useState } from "react";

export const AppearMessageContext = createContext();

export function AppearMessageProvider({ children }) {
  const [showMsg, setShowMsg] = useState(false);
  const [message, setMessage] = useState("")
  const timeout = useRef();

  function addMealMessage(message) {
    clearTimeout(timeout.current);
    setShowMsg(true);
    setMessage(message)
    timeout.current = setTimeout(() => {setShowMsg(false)}, 2000);
    
  }

  return (
    <AppearMessageContext.Provider
      value={{ showMsg, setShowMsg, addMealMessage, message }}
    >
      {children}
    </AppearMessageContext.Provider>
  );
}
