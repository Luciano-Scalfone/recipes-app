import Router from "./routes";
import "./App.css";
import FilterProvider from "./context/FilterContext";
import MealsProvider from "./context/MealsContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MealsProvider> 
        <FilterProvider>
          <Router />
        </FilterProvider>
      </MealsProvider>
    </BrowserRouter>
  );
}

export default App;
