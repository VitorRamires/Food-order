import { createContext, useState } from "react";

export const MealsOnCartContext = createContext();

export function MealsOnCartProvider({ children }) {
  const [mealListOnCart, setMealListOnCart] = useState([]);
  console.log(mealListOnCart);

  return (
    <MealsOnCartContext.Provider value={{ mealListOnCart, setMealListOnCart }}>
      {children}
    </MealsOnCartContext.Provider>
  );
}
