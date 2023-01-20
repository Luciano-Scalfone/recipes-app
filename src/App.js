import Router from "./routes";
import "./App.css";
import FilterProvider from "./context/FilterContext";
import MealsProvider from "./context/MealsContext";

function App() {
  return (
    <MealsProvider>
      <FilterProvider>
        <Router />
      </FilterProvider>
    </MealsProvider>
  );
}

export default App;
