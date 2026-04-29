import logo from "../../public/logo.jpg";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ModalCart } from "./modals/ModalCart";
import { CheckoutContext } from "./context/checkoutMarked";

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const { setCheckoutClicked } = useContext(CheckoutContext);

  function closeModalHandle() {
    setShowModal(false);
    setCheckoutClicked(false);
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

      <button
        className="cart items-end cursor-pointer text-amber-500 sm:text-base text-sm"
        onClick={() => {
          setShowModal(true);
        }}
      >
        My Cart
      </button>

      {showModal &&
        createPortal(<ModalCart onClose={closeModalHandle} />, document.body)}
    </header>
  );
}
