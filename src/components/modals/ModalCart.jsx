import { CheckoutForm } from "../checkout";
import { CartList } from "./ModalCartList";
import { CheckoutContext } from "../context/checkoutMarked";
import { useContext } from "react";
import closeIcon from "../../assets/icons/close.svg";

export function ModalCart({ onClose }) {
  const { checkoutClicked, setCheckoutClicked } = useContext(CheckoutContext);

  return (
    <>
      <div className="fixed inset-0 bg-black/90 z-50 overflow-auto flex items-center justify-center p-2">
        <div className="modal max-h-200 bg-zinc-900 sm:w-125 w-lg relative rounded-xl custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div
            className="close-btn cursor-pointer ml-auto w-fit"
            onClick={onClose}
          >
            <img
              src={closeIcon}
              alt="close icon modal cart"
              className="w-8 h-8 mt-3 mr-3"
            />
          </div>
          {checkoutClicked ? <CheckoutForm /> : <CartList />}
        </div>
      </div>
    </>
  );
}
