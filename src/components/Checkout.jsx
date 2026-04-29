import { useContext } from "react";
import { Input } from "./Input";
import { MealsOnCartContext } from "./context/MealsOnCart";
import { useActionState } from "react";
import { postMeals } from "../DATA";

export function CheckoutForm() {
  const { mealListOnCart } = useContext(MealsOnCartContext);
  const [formState, actionHandleSubmit] = useActionState(handleSubmit, {
    errors: null,
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
    const orderData = {
      order: {
        items: mealListOnCart,
        customer: customerInfos,
      },
    };

    const fields = [
      { value: name, message: "Fill the name input" },
      { value: email, message: "Fill the e-mail input" },
      { value: street, message: "Fill the street input" },
      { value: postalCode, message: "Fill the postal-code input" },
      { value: city, message: "Fill the the city input" },
    ];
    const errors = [];
    fields.forEach(({ value, message }) => {
      if (value === "") errors.push(message);
    });
    if (errors.length > 0) return { errors };

    
    await postMeals(orderData);
    return { errors: null };
  }

  return (
    <>
      <div className="checkout w-full">
        <form action={actionHandleSubmit} className="w-full">
          <div className="p-5 flex flex-col gap-7">
            <Input
              label={"Full name"}
              id={"name"}
              type={"text"}
              width={"w-full"}
            />
            <Input
              label={"E-mail address"}
              id={"email"}
              type={"email"}
              width={"w-full"}
            />
            <Input
              label={"Street"}
              id={"street"}
              type={"text"}
              width={"w-full"}
            />

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <Input
                label={"Postal-Code"}
                id={"postalCode"}
                type={"text"}
                width={"w-full"}
              />
              <Input
                label={"City"}
                id={"city"}
                type={"text"}
                width={"w-full"}
              />
            </div>

            {formState.errors && (
              <ul>
                {formState.errors.map((error) => (
                  <li
                    key={error}
                    className="text-red-400 my-2 list-disc list-inside text-xs sm:text-sm pl-6 border py-2 rounded-sm"
                  >
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            className="w-full text-zinc-50 bg-amber-500  p-5 mt-5 cursor-pointer hover:bg-amber-600 transition"
            type="submit"
          >
            Submit Order
          </button>
        </form>
      </div>
    </>
  );
}
