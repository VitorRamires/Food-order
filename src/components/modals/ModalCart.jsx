import { CheckoutForm } from "../checkout";
import { CartList } from "./ModalCartList";
import { CheckoutContext } from "../context/checkoutMarked";
import { useContext } from "react";

export function ModalCart({ onClose }) {
  const { checkoutClicked } = useContext(CheckoutContext);

  return (
    <>
      <div className="fixed inset-0 bg-black/90 z-50 overflow-auto flex items-center justify-center">
        <div className="modal max-h-200 overflow-auto bg-zinc-900 w-fit relative rounded-xl">
          {checkoutClicked ? <CartList onClose={onClose} /> : <CheckoutForm />}
        </div>
      </div>
    </>
  );
}
