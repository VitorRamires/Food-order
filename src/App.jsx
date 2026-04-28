import { CheckoutMarkedProvider } from "./components/context/checkoutMarked";
import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <>
      <MealsOnCartProvider>
        <CheckoutMarkedProvider>
          <Header />
          <Meals />
        </CheckoutMarkedProvider>
      </MealsOnCartProvider>
    </>
  );
}

export default App;
