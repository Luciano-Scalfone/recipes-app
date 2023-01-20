import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllCategories } from "../services/fetchs";
import { MealsContext } from "./MealsContext";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState();
  const { setMeals } = useContext(MealsContext);

  useEffect(() => {
    if (activeFilter) {
      const { filterClass, filterBy } = activeFilter;
      const PROMISSE_API = fetchAllCategories(filterClass, filterBy);

      PROMISSE_API.then((data) => {
        const FILTERED_MEAL = data.map((filteredMeal) => {
          return {
            id: filteredMeal.idMeal,
            name: filteredMeal.strMeal,
            image: filteredMeal.strMealThumb,
          };
        });

        setMeals(FILTERED_MEAL);
      }).catch((error) => console.log("Erro na Api", error));
    }
  }, [activeFilter]);

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
