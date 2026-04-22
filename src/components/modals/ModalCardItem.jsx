import { URL_BASE } from "../../DATA";

export function ModalCardItem({ id, price, image, name }) {
  return (
    <li>
      <div className="cart-item">
        <img src={`${URL_BASE}/${image}`} alt="" />
        <div className="item-info">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    </li>
  );
}
