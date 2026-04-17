import logo from "../../public/logo.jpg";

export function Header() {
  return (
    <header className="flex justify-between w-full items-center p-6 bg-zinc-900 sticky top-0 shadow-md shadow-grey-1000">
      <img className="w-20 h-auto" src={logo} alt="food-order logo" />{" "}
      <div className="cart items-end cursor-pointer text-amber-500">My Cart</div>
    </header>
  );
}
