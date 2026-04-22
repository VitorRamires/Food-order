import { MealsOnCartProvider } from "./components/context/MealsOnCart";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";

function App() {
  return (
    <>
      <MealsOnCartProvider>
        <Header />
        <Meals />
      </MealsOnCartProvider>
    </>
  );
}

export default App;
