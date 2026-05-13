import errorIcon from "../assets/icons/error-meal.svg";

export function ErrorMeals({ message }) {
  return (
    <div className="error-message flex flex-col items-center justify-center gap-4 p-4 mt-30">
      <img src={errorIcon} alt="" className="w-20 h-auto"/>
      <h2 className="sm:text-2xl text-sm text-amber-400 font-bold mb-3">{message}</h2>
    </div>
  );
}
