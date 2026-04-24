import { URL_BASE } from "../../DATA";

export function ModalCardItem({ id, price, image, name, quantity }) {


  function handleIncrementQuantity () {

  }

  function handleDecrementQuantity () {

  }

  return (
    <li className=" py-7 px-5 border-b border-zinc-800">
      <div className="cart-item flex gap-5 justicy-center">
        <img
          className="w-25 h-auto rounded-xl"
          src={`${URL_BASE}/${image}`}
          alt=""
        />

        <div className="info-wrapper flex flex-col place-content-center gap-3">
          <div className="item-info w-80">
            <h3 className="text-lg text-amber-50">{name}</h3>
            <p className="text-amber-500">${price}</p>
          </div>
          <div className="adding-quantity flex flex-row gap-5 text-lg text-amber-100">
            <button  className="bg-zinc-800 border border-amber-500 rounded-full flex justify-center itens-center w-7 h-fit text-xl">-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrementQuantity} className="bg-zinc-800 border border-amber-500 rounded-full flex justify-center itens-center w-7 h-fit text-xl">+</button>
          </div>
        </div>

      </div>
    </li>
  );
}
