import { useContext, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { SearchIcon } from "../../assets/Icons";
import { FilterContext } from "../../context/FilterContext";
import { FILTER_INITIAL_STATE } from "../../interfaces/filterInitialState";
import { HeaderWrapper } from "./HeaderStyles";

export const Header = () => {
  const [filter, setFilter] = useState(FILTER_INITIAL_STATE);
  const { setActiveFilter } = useContext(FilterContext);

  const onFilterChange = ({ target }) => {
    const { name, value } = target;

    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const onFilterButtonClick = () => {
    setActiveFilter(filter);
  };

  return (
    <HeaderWrapper>
      <select name="filterClass" onChange={(e) => onFilterChange(e)}>
        <option value="name" defaultValue>name</option>
        <option value="first-letter">first letter</option>
        <option value="category">category</option>
        <option value="area">area</option>
        <option value="ingredient">ingredient</option>
      </select>
      <DebounceInput
        minLength={0}
        debounceTimeout={1000}
        name="filterBy"
        onChange={(e) => onFilterChange(e)}
        type="text"
        placeholder="Big Mc"
      />
      <button onClick={() => onFilterButtonClick()} type="button">
        <SearchIcon />
      </button>
    </HeaderWrapper>
  );
};
