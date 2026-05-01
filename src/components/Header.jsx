import logo from "../../public/logo.jpg";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Cart } from "./modals/Cart";
import cartIcon from "../assets/icons/cart.svg";
import { MealsOnCartContext } from "./context/MealsOnCart";
import { UserProgressContext } from "./context/UserProgress";

export function Header() {
  const { mealListOnCart } = useContext(MealsOnCartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function openCartHandle() {
    userProgressCtx.showCart();
  }

  return (
    <header className="flex flex-row gap-4 justify-between w-full items-center p-6 bg-zinc-900 sticky top-0 shadow-md shadow-grey-1000">
      <div className="flex gap-3 flex-start justify-center items-center">
        <img
          className="sm:w-20 w-10 h-auto rounded-full border-amber-500 border-2"
          src={logo}
          alt="food-order logo"
        />
        <span className="text-amber-500 font-bold sm:text-base text-sm">
          Food Order
        </span>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <img src={cartIcon} alt="cart icon" className="w-5 h-auto" />
        <button
          onClick={openCartHandle}
          className="cart items-end cursor-pointer text-amber-500 sm:text-base text-sm"
        >
          My Cart
        </button>

        <div className="bg-zinc-900 border border-amber-500 px-3  rounded-xl font-bold relative">
          <p className="pb-0.5 text-zinc-50 text-base">
            {mealListOnCart.length}
          </p>
        </div>
      </div>
    </header>
  );
}
