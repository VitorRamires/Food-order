import { AppearMessageProvider } from "./components/context/AppearMessage";
import { CheckoutMarkedProvider } from "./components/context/checkoutMarked";
import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <>
      <CheckoutMarkedProvider>
        <AppearMessageProvider>
          <MealsOnCartProvider>
            <Header />
            <Meals />
          </MealsOnCartProvider>
        </AppearMessageProvider>
      </CheckoutMarkedProvider>
    </>
  );
}

export default App;
