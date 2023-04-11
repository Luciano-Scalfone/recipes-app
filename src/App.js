import Router from "./routes";
import "./App.css";
import FilterProvider from "./context/FilterContext";
import MealsProvider from "./context/MealsContext";
import LoginProvider from "./context/LoginContext";

function App() {
  return (
    <MealsProvider>
      <FilterProvider>
        <LoginProvider>
          <Router />
        </LoginProvider>
      </FilterProvider>
    </MealsProvider>
  );
}

export default App;
