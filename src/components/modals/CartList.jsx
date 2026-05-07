import { useContext } from "react";
import { MealsOnCartContext } from "../context/MealsOnCart";
import { CartItem } from "./CartItem";
import { useTotalCalc } from "../../custom_hooks/useTotalCalc";
import { NoMealsFound } from "./NoMeals";
import { UserProgressContext } from "../context/UserProgress";

export function CartList() {
  const { mealListOnCart } = useContext(MealsOnCartContext);
  const listIsEmpty = mealListOnCart.length === 0;

  const { subtotal } = useTotalCalc(mealListOnCart);
  const subtotalNumber = +subtotal.toFixed(4);

  const userProgressCtx = useContext(UserProgressContext);

  function openCheckoutHandle() {
    userProgressCtx.showCheckout();
  }

  return (
    <div className="cart-list ">
      {listIsEmpty && <NoMealsFound />}
      {!listIsEmpty && (
        <div className="cart-list">
          <ul>
            {mealListOnCart.map(({ id, price, image, name, quantity }) => {
              return (
                <CartItem
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

          <div className="sticky bottom-0">
            <p className="p-5 text-xl text-amber-500 font-bold bg-zinc-800">
              Total: $ {subtotalNumber}
            </p>
            <button
              onClick={openCheckoutHandle}
              className=" w-full text-zinc-50 bg-amber-500  p-5 cursor-pointer hover:bg-amber-600 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
