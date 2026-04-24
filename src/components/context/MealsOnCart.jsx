import { createContext, useState } from "react";

export const MealsOnCartContext = createContext();

export function MealsOnCartProvider({ children }) {
  const [mealListOnCart, setMealListOnCart] = useState([]);
  const [mealIsAdd, setMealIsAdd] = useState(false);

  function updateQuantity  (id, actionHandle) {
    setMealListOnCart((prevMeals) => {
      return prevMeals.map((meal) => {
        if(meal.id === id) {
          const newQuantity = Math.max(1, meal.quantity + actionHandle);
          return {...meal, quantity: newQuantity}
        }
        return meal
      })
    })
  }


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
      value={{ mealListOnCart, mealIsAdd, setMealListOnCart, addToCart, updateQuantity  }}
    >
      {children}
    </MealsOnCartContext.Provider>
  );
}
