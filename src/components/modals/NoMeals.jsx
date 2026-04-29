import mealMissingIcon from "../../assets/icons/not-meal-icon.svg";

export function NoMealsFound() {
  return (
    <div className="flex flex-col justify-center items-center my-6 p-10">
      <img
        src={mealMissingIcon}
        alt="not meals added on cart icon"
        className="w-10 h-auto"
      />

      <h2 className="px-6 mt-4 text-amber-50 text-sm">
        No items were added to the cart
      </h2>
    </div>
  );
}
