import { useContext, useEffect } from "react";
import closeIcon from "../../assets/icons/close.svg";
import { UserProgressContext } from "../context/UserProgress";

export function OrderStatus() {
  const userProgressCtx = useContext(UserProgressContext);
  const isVisible = userProgressCtx.userProgress === "order-status";

  function handleCloseModal() {
    userProgressCtx.closeModal();
  }

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(handleCloseModal, 4000);
    return () => clearTimeout(timer); // limpa se fechar antes dos 2s
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-fit">
      <p
        className="text-2xl text-bold mb-3 ml-auto relative w-fit text-zinc-50 bg-amber-500 px-3 py-1 rounded-full top-6 left-2 shadow-sm"
        onClick={handleCloseModal}
      >
        X
      </p>
      <div className="order-message text-zinc-50 bg-amber-700 p-5 rounded-sm">
        <h2 className="text-2xl">Your order was successful!</h2>
        <p className="text-sm">Now just wait for your order to arrive!</p>
      </div>
    </div>
  );
}
