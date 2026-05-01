import { useEffect, useState } from "react";
import { getMeals } from "../DATA";
import { MealCard } from "./MealCard";



export function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchingMeals() {
      const data = await getMeals();
      setMeals(data);
    }
    fetchingMeals();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 xl:w-6xl p-4 max-95 mx-auto my-10">
      {meals.map(({ name, price, id, image, description }) => (
        <MealCard
          name={name}
          price={price}
          id={id}
          image={image}
          description={description}
          key={id}
        />
      ))}
    </section>
  );
}
