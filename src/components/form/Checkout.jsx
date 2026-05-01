import { useContext } from "react";
import { Input } from "./Input";
import { MealsOnCartContext } from "../context/MealsOnCart";
import { useActionState } from "react";
import { postMeals } from "../../DATA";
import { UserProgressContext } from "../context/UserProgress";
import { Modal } from "../modals/Modal";
import closeIcon from "../../assets/icons/close.svg";

export function Checkout() {
  const { mealListOnCart, setMealListOnCart } = useContext(MealsOnCartContext);
  const [formState, actionHandleSubmit] = useActionState(handleSubmit, {
    errors: null,
  });
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseModal() {
    userProgressCtx.closeModal();
  }

  async function handleSubmit(prevFormState, formData) {
    const customerInfos = Object.fromEntries(formData.entries());

    const orderData = {
      order: {
        items: mealListOnCart,
        customer: customerInfos,
      },
    };

    try {
      await postMeals(orderData);
      setMealListOnCart([]);
      userProgressCtx.showOrderStatus();
    } catch (error) {
      setMealListOnCart((prevMeals) => [...prevMeals]);
    }

    return { errors: null };
  }

  console.log(userProgressCtx);

  return (
    <Modal open={userProgressCtx.userProgress === "checkout"}>
      <div className="checkout fixed inset-0 bg-black/90 z-50 overflow-auto flex items-center justify-center p-2">
        <form
          action={actionHandleSubmit}
          className="max-h-200 bg-zinc-900 sm:w-125 w-lg relative rounded-xl custom-scrollbar overflow-y-auto overflow-x-hidden"
        >
          <div className="close-btn cursor-pointer ml-auto w-fit">
            <img
              src={closeIcon}
              alt="close icon modal cart"
              className="w-8 h-8 mt-3 mr-3"
              onClick={handleCloseModal}
            />
          </div>
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
                id={"postal-code"}
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
          </div>

          <button
            className=" w-full text-zinc-50 bg-amber-500  p-5 cursor-pointer hover:bg-amber-600 transition"
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
    </Modal>
  );
}
