import logo from "../../public/logo.jpg";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalCart } from "./modals/ModalCart";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-between w-full items-center p-6 bg-zinc-900 sticky top-0 shadow-md shadow-grey-1000">
      <div className="flex gap-3 flex-start justify-center items-center">
        <img
          className="w-20 h-auto rounded-full border-amber-500 border-2"
          src={logo}
          alt="food-order logo"
        />
        <span className="text-amber-500 font-bold">Food Order</span>
      </div>

      <button
        className="cart items-end cursor-pointer text-amber-500"
        onClick={() => {
          setShowModal(true);
        }}
      >
        My Cart
      </button>

      {showModal &&
        createPortal(
          <ModalCart onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </header>
  );
}
