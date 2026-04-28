import { useContext } from "react";
import { Input } from "./Input";
import { MealsOnCartContext } from "./context/MealsOnCart";

export function CheckoutForm() {

  const {mealListOnCart} = useContext(MealsOnCartContext)

  function handleSubmit () {
    console.log(mealListOnCart)
  }

  return (
    <>
      <div className="checkout w-120">
        <form className="p-5">
          <Input width={"w-105"}  name={"Full name"} id={"name"} type={"text"} />
          <Input width={"w-105"} name={"E-mail address"} id={"email"} type={"email"} />
          <Input width={"w-105"} name={"Street"} id={"street"} type={"text"} />

          <div className="flex flex-row gap-5">
            <Input width={"w-50"} name={"PostCard"} id={"postcard"} type={"number"} />
            <Input width={"w-50"} name={"City"} id={"city"} type={"text"} />
          </div>
        </form>

        <button onClick={handleSubmit} className="w-full text-zinc-50 bg-amber-500  p-5 cursor-pointer hover:bg-amber-600 transition">
          Submit Order
        </button>
      </div>
    </>
  );
}
