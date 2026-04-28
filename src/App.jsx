import { CheckoutMarkedProvider } from "./components/context/checkoutMarked";
import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <>
      <CheckoutMarkedProvider>
        <MealsOnCartProvider>
          <Header />
          <Meals />
        </MealsOnCartProvider>
      </CheckoutMarkedProvider>
    </>
  );
}

export default App;
