import Router from "./routes";
import "./App.css";
import FilterProvider from "./context/FilterContext";

function App() {
  return (
    <FilterProvider>
      <Router />
    </FilterProvider>
  );
}

export default App;
