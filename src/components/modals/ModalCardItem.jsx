import { useContext, useState } from "react";
import { URL_BASE } from "../../DATA";
import { MealsOnCartContext } from "../context/MealsOnCart";

export function ModalCardItem({ id, price, image, name, quantity }) {
  const { updateQuantity } = useContext(MealsOnCartContext);

  function handleDecrement() {
    updateQuantity(id, -1);
  }

  function handleIncrement() {
    updateQuantity(id, +1);
  }

  return (
    <li className=" py-7 px-5 border-b border-zinc-800 w-full">
      <div className="cart-item flex flex-col sm:flex-row gap-5 justify-center items-center ">
        <img
          className="w-30 h-auto rounded-xl"
          src={`${URL_BASE}/${image}`}
          alt=""
        />

        <div className="info-wrapper flex flex-col place-content-center gap-5">
          <div className="item-info w-80 text-center sm:text-left">
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
    </li>
  );
}
