import { useContext, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { SearchIcon } from "../../assets/icons";
import { FilterContext } from "../../context/FilterContext";
import { HeaderWrapper } from "./HeaderStyles";

const INITIAL_STATE = {
  filterClass: "name",
  filterBy: "",
};

export const Header = () => {
  const [filter, setFilter] = useState(INITIAL_STATE);
  const { setActiveFilter } = useContext(FilterContext);

  useEffect(() => {
    return setActiveFilter(filter);
  }, [])

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
