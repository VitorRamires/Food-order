import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export function CheckoutMarkedProvider(children) {
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  return (
    <CheckoutContext.Provider
      value={{ checkoutClicked, setCheckoutClicked }}
      {...children}
    ></CheckoutContext.Provider>
  );
}
