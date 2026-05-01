import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { UserProgressProvider } from "./components/context/UserProgress";
import { Checkout } from "./components/form/Checkout";
import { OrderStatus } from "./components/form/OrderStatus";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { Cart } from "./components/modals/Cart";

function App() {
  return (
    <>
      <>
        <UserProgressProvider>
          <MealsOnCartProvider>
            <Header />
            <Meals />
            <Cart />
            <Checkout />
            <OrderStatus />
          </MealsOnCartProvider>
        </UserProgressProvider>
      </>
    </>
  );
}

export default App;
