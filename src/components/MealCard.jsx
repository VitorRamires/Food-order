import { useContext, useEffect, useState } from "react";
import { getMeals, URL_BASE } from "../DATA";
import { MealsOnCartContext } from "./context/MealsOnCart";
import { AddToCartMessage } from "./modals/AddToCartMsg";
import { AppearMessageContext } from "./context/AppearMessage";

export function MealCard({ name, price, id, image, description }) {
  const [meals, setMeals] = useState([]);
  const [mealsExist, setMealsExist] = useState(false);

  const { addToCart, mealListOnCart } = useContext(MealsOnCartContext);
  const { addMealMessage } = useContext(AppearMessageContext);

  useEffect(() => {
    const verifyMealsExist = mealListOnCart.some((meal) => meal.id === id);
    setMealsExist(verifyMealsExist);
  }, [mealListOnCart]);

  function handleAddCart() {
    const mealData = { id, price, image, name };

    if (mealsExist) {
      addMealMessage("Meal is on cart");
      return;
    }

    addToCart(mealData);
  }

  return (
    <div className="h-full">
      <div className="card-meal h-full bg-zinc-900 rounded-tl-md rounded-tr-md flex flex-col">
        <img
          className=" rounded-tl-md rounded-tr-md"
          src={`${URL_BASE}/${image}`}
          alt={name}
        />

        <div className="flex-1 gap-5 flex flex-col items-center justify-between text-center rounded-bl-md rounded-br-md p-5 border-t border-t-amber-500 text-mist-100 shadow-sm shadow-zinc-900">
          <div className="m-4">
            <h2 className="text-xl text-amber-400 font-bold mb-3">{name}</h2>
            <h3 className="text-md bg-zinc-800 p-2 w-30 m-auto rounded-sm">
              $ {price}
            </h3>
            <p className="mt-7 text-xs">{description}</p>
          </div>

          <button
            onClick={handleAddCart}
            disabled={mealsExist ? true : false}
            className="mt-auto bg-green-600 w-30 p-2 cursor-pointer hover:bg-green-600 hover:text-orange-50 transition hover:-translate-y-1 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
