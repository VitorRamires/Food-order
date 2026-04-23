import { URL_BASE } from "../../DATA";

export function ModalCardItem({ id, price, image, name, quantity }) {
  return (
    <li className="mt-10 pl-5 pr-5">
      <div className="cart-item flex gap-5 justicy-center">
        <img
          className="w-30 h-auto rounded-xl"
          src={`${URL_BASE}/${image}`}
          alt=""
        />

        <div className="info-wrapper flex flex-col place-content-center gap-6">
          <div className="item-info w-80">
            <h3 className="text-lg text-amber-50">{name}</h3>
            <p className="text-amber-500">${price}</p>
          </div>
          <div className="adding-quantity flex flex-row gap-3">
            <button>+</button>
            <p>{quantity}</p>
            <button>-</button>
          </div>
        </div>

      </div>
    </li>
  );
}
