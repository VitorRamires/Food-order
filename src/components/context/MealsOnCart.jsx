import { createContext, useState } from "react";

export const MealsOnCartContext = createContext();

export function MealsOnCartProvider({ children }) {
  const [mealListOnCart, setMealListOnCart] = useState([]);
  const [mealIsAdd, setMealIsAdd] = useState(false);

  function addToCart(meal) {
    setMealListOnCart((prevMeals) => {
      const mealExists = prevMeals.find((item) => {
        return item.id === meal.id;
      });

      if (mealExists) {
        return prevMeals;
      }

      return [...prevMeals, { ...meal, quantity: 1 }];
    });
  }

  return (
    <MealsOnCartContext.Provider
      value={{ mealListOnCart, mealIsAdd, setMealListOnCart, addToCart }}
    >
      {children}
    </MealsOnCartContext.Provider>
  );
}
