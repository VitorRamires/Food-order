import { useContext } from "react";
import { Input } from "./Input";
import { MealsOnCartContext } from "./context/MealsOnCart";
import { useActionState } from "react";
import { postMeals } from "../DATA";

export function CheckoutForm() {
  const { mealListOnCart } = useContext(MealsOnCartContext);
  const [formState, actionHandleSumbit] = useActionState(handleSubmit, {
    error: null,
  });

  async function handleSubmit(prevFormState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postalCode");
    const city = formData.get("city");

    const customerInfos = {
      name,
      email,
      street,
      "postal-code": postalCode,
      city,
    };
    const errors = [];

    const orderData = {
      order: {
        items: mealListOnCart,
        customer: customerInfos,
      },
    };

    if (name === "") errors.push("fill the name input");
    if (email === "") errors.push("fill the title input");
    if (street === "") errors.push("fill the your opinion text area");
    if (street === "") errors.push("fill the your opinion text area");
    if (city === "") errors.push("fill the your opinion text area");

    if (errors.length > 0) return { errors };

    await postMeals(orderData);
    return { errors: null };
  }

  return (
    <>
      <div className="checkout w-120">
        <form action={actionHandleSumbit} className="p-5">
          <Input
            label={"Full name"}
            id={"name"}
            type={"text"}
            width={"w-105"}
          />
          <Input
            label={"E-mail address"}
            id={"email"}
            type={"email"}
            width={"w-105"}
          />
          <Input label={"Street"} id={"street"} type={"text"} width={"w-105"} />

          <div classlabel="flex flex-row gap-5">
            <Input
              label={"Postal-Code"}
              id={"postalCode"}
              type={"text"}
              width={"w-50"}
            />
            <Input label={"City"} id={"city"} type={"text"} width={"w-50"} />
          </div>

          <button
            className="w-full text-zinc-50 bg-amber-500  p-5 cursor-pointer hover:bg-amber-600 transition"
            type="submit"
          >
            Submit Order
          </button>

          {formState.errors && (
            <ul>
              {formState.errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </>
  );
}
