import { createContext, useState } from "react";

export const MealsOnCartContext = createContext();

export function MealsOnCartProvider({ children }) {
  const [mealListOnCart, setMealListOnCart] = useState([]);

  function updateQuantity(id, actionHandle) {
    setMealListOnCart((prevMeals) => {
      return prevMeals.map((meal) => {
        if (meal.id === id) {
          const newQuantity = Math.max(1, meal.quantity + actionHandle);
          return { ...meal, quantity: newQuantity };
        }
        return meal;
      });
    });
  }

  function removeToCart(id) {
    setMealListOnCart((prevMeals) => {
      return prevMeals.filter((item) => item.id !== id);
    });
  }

  function addToCart(meal) {
    setMealListOnCart((prevMeals) => {
      //possibilidade de custom hook
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
      value={{
        mealListOnCart,
        setMealListOnCart,
        addToCart,
        updateQuantity,
        removeToCart,
      }}
    >
      {children}
    </MealsOnCartContext.Provider>
  );
}
