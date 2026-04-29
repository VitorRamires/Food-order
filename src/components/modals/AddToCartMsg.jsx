import { useContext } from "react";
import { AppearMessageContext } from "../context/AppearMessage";

export function AddToCartMessage() {
  const { showMsg, message } = useContext(AppearMessageContext);

  return (
    <h3
      className={`fixed bottom-10 right-10 bg-green-400 text-zinc-800 p-5 rounded-lg font-bold text-bold shadow-lg transition-all duration-300 ${
        showMsg ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {message}
    </h3>
  );
}
