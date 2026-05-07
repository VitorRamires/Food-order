import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  showCart: () => {},
  showCheckout: () => {},
  closeModal: () => {},
});

export function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("order-status");

  function showCart() {
    setUserProgress("cart");
  }

  function closeModal() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function showOrderStatus() {
    setUserProgress("order-status");
  }

  const userProgressCtx = {
    showCart,
    closeModal,
    showCheckout,
    showOrderStatus,
    userProgress,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
