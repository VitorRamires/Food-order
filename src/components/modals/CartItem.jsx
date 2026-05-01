import { useContext, useState } from "react";
import { URL_BASE } from "../../DATA";
import { MealsOnCartContext } from "../context/MealsOnCart";
import trash from "../../assets/icons/trash.svg";

export function CartItem({ id, price, image, name, quantity }) {
  const { updateQuantity, removeToCart } = useContext(MealsOnCartContext);

  function handleDecrement() {
    updateQuantity(id, -1);
  }

  function handleIncrement() {
    updateQuantity(id, +1);
  }

  function removeMeal() {
    removeToCart(id);
  }

  return (
    <li className=" py-7 px-5 border-b border-zinc-800 w-full">
      <div className="cart-item flex flex-col sm:flex-row sm:gap-5 gap-10 sm:justify-between sm:items-center items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-fit gap-10 items-center justify-center">
          <img
            className="sm:w-30 w-50 h-auto rounded-xl"
            src={`${URL_BASE}/${image}`}
            alt=""
          />

          <div className="info-wrapper flex flex-col place-content-center gap-5">
            <div className="item-info w-full text-center sm:text-left">
              <h3 className="text-lg text-amber-50">{name}</h3>
              <p className="text-amber-500">$ {price}</p>
            </div>

            <div className="adding-quantity flex flex-row justify-center sm:justify-start items-center gap-5 text-lg text-amber-100">
              <button
                onClick={handleDecrement}
                className="bg-zinc-800 border border-amber-500 rounded-full w-6 h-6 text-xl cursor-pointer flex items-center justify-center pb-0.5 pl-0.4"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={handleIncrement}
                className="bg-zinc-800 border border-amber-500 rounded-full w-6 h-6 text-xl cursor-pointer flex items-center justify-center pt-0.5 pr-0.2"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <img
          onClick={removeMeal}
          src={trash}
          alt="remove meal icon"
          className="w-5 h-auto cursor-pointer"
        />
      </div>
    </li>
  );
}
