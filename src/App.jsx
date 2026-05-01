import { AppearMessageProvider } from "./components/context/AppearMessage";
import { CheckoutMarkedProvider } from "./components/context/CheckoutMarked";
import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <>
      <AppearMessageProvider>
        <CheckoutMarkedProvider>
          <MealsOnCartProvider>
            <Header />
            <Meals />
          </MealsOnCartProvider>
        </CheckoutMarkedProvider>
      </AppearMessageProvider>
    </>
  );
}

export default App;
