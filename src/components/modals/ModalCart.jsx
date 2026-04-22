import { useContext } from "react";
import { MealsOnCartContext } from "../context/MealsOnCart";
import { ModalCardItem } from "./ModalCardItem";

export function ModalCart({ onClose }) {
  const { mealListOnCart } = useContext(MealsOnCartContext);

  return (
    <>
      <div className="fixed inset-0 bg-black/50  z-50 overflow-auto">
        <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
          <p onClick={onClose}>Sair!</p>
        </div>
        <ul>
          {mealListOnCart.map(({ id, price, image, name }) => {
            return (
              <ModalCardItem
                key={id + "modalItem"}
                id={id}
                price={price}
                image={image}
                name={name}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
