import { CartList } from "./CartList";
import { useContext } from "react";
import closeIcon from "../../assets/icons/close.svg";
import { Modal } from "./Modal";
import { UserProgressContext } from "../context/UserProgress";

export function Cart() {
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseModal() {
    userProgressCtx.closeModal();
  }

  return (
    <Modal open={userProgressCtx.userProgress === "cart"}>
      <div className="fixed inset-0 bg-black/90 z-50 overflow-auto flex items-center justify-center p-2 ">
        <div className="max-h-200 bg-zinc-900 sm:w-125 w-lg relative rounded-xl custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div className="close-btn cursor-pointer ml-auto w-fit">
            <img
              src={closeIcon}
              alt="close icon modal cart"
              className="w-8 h-8 mt-3 mr-3"
              onClick={handleCloseModal}
            />
          </div>
          <CartList />
        </div>
      </div>
    </Modal>
  );
}
