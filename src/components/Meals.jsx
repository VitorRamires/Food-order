import { useEffect, useState } from "react";
import { getMeals } from "../DATA";
import { MealCard } from "./MealCard";
import { Loading } from "./Loading";
import { ErrorMeals } from "./ErrorMeals";

export function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealsLoading, setMealsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingMeals() {
      setMealsLoading(true);

      try {
        const data = await getMeals();
        setMeals(data);
      } catch (error) {
        setError("Was not possible fetch the meals...");
      } finally {
        setMealsLoading(false);
      }
    }
    fetchingMeals();
  }, []);

  if (mealsLoading) return <Loading />;
  if (error) return <ErrorMeals message={error} />;

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
