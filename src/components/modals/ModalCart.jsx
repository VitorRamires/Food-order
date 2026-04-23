import { useContext } from "react";
import { MealsOnCartContext } from "../context/MealsOnCart";
import { ModalCardItem } from "./ModalCardItem";

export function ModalCart({ onClose }) {
  const { mealListOnCart } = useContext(MealsOnCartContext);

  return (
    <>
      <div className="fixed inset-0 bg-black/90 z-50 overflow-auto flex items-center justify-center">
        <div className="modal min-h-150 overflow-auto bg-zinc-900 w-fit relative">
          <div
            className="close-btn cursor-pointer ml-auto w-fit"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="orange"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
              className="mt-3 mr-3"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </div>
          <ul>
            {mealListOnCart.map(({ id, price, image, name, quantity }) => {
              return (
                <ModalCardItem
                  key={id + "modalItem"}
                  id={id}
                  price={price}
                  image={image}
                  name={name}
                  quantity={quantity}
                />
              );
            })}
          </ul>
          <button className=" w-full text-zinc-50 bg-amber-500 mt-10 p-5 cursor-pointer hover:bg-amber-600 transition">Check-in</button>
        </div>
      </div>
    </>
  );
}
