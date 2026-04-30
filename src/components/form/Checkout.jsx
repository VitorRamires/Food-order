import { useActionState, useContext } from "react";
import { Input } from "./Input";
import { MealsOnCartContext } from "../context/MealsOnCart";
import { postMeals } from "../../DATA";
import { SubmitBtn } from "./SubmitBtn";

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
    const errors = [];

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

    fields.forEach(({ value, message }) => {
      if (value === "") errors.push(message);
    });

    if (errors.length > 0)
      return { errors, inputValue: { name, email, street, postalCode, city } };

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
              defaultValue={formState.inputValue?.name}
            />
            <Input
              label={"E-mail address"}
              id={"email"}
              type={"email"}
              width={"w-full"}
              defaultValue={formState.inputValue?.email}
            />
            <Input
              label={"Street"}
              id={"street"}
              type={"text"}
              width={"w-full"}
              defaultValue={formState.inputValue?.street}
            />

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <Input
                label={"Postal-Code"}
                id={"postalCode"}
                type={"text"}
                width={"w-full"}
                defaultValue={formState.inputValue?.postalCode}
              />
              <Input
                label={"City"}
                id={"city"}
                type={"text"}
                width={"w-full"}
                defaultValue={formState.inputValue?.city}
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

          <SubmitBtn />
        </form>
      </div>
    </>
  );
}
