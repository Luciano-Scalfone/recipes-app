import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllCategories } from "../services/fetchs.js";
import { MealsContext } from "./MealsContext";
import { FILTER_INITIAL_STATE } from "../interfaces/filterInitialState.js";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState(FILTER_INITIAL_STATE);
  const { setMeals } = useContext(MealsContext);

  useEffect(() => {
    if (activeFilter) {
      (async () => {
        const { filterClass, filterBy } = activeFilter;
        const PROMISSE_API = await fetchAllCategories(filterClass, filterBy);

        const FILTERED_MEAL = PROMISSE_API.map((filteredMeal) => {
          return {
            id: filteredMeal.idMeal,
            name: filteredMeal.strMeal,
            image: filteredMeal.strMealThumb,
          };
        });

        setMeals(FILTERED_MEAL);
      })();
    }
  }, [activeFilter]);

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
