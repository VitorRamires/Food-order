import { useEffect, useState } from "react";
import { getMeals, URL_BASE } from "../DATA";

export function MealCard({ name, price, id, image, description }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchingMeals() {
      const data = await getMeals();
      setMeals(data);
    }
    fetchingMeals();
  }, []);

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
            <h3 className="text-md bg-zinc-800 p-2 w-30 m-auto rounded-sm">R$ {price}</h3>
            <p className="mt-7 text-xs">{description}</p>
          </div>

          <button className="mt-auto bg-green-400 w-30 p-2 cursor-pointer hover:bg-green-600 hover:text-orange-50 transition hover:-translate-y-1 rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
