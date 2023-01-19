import { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons";
import { HeaderWrapper } from "./HeaderStyles";

const INITIAL_STATE = {
  filterBy: 'name',
  value: ''
};

export const Header = () => {
  const [filter, setFilter] = useState(INITIAL_STATE);

  const onFilterChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterBy: value
    });
  }

  return (
    <HeaderWrapper>
      <select onChange={(e) => onFilterChange(e)}>
        <option value="name" defaultValue >name</option>
        <option value="first-letter" >first letter</option>
        <option value="category" >category</option>
        <option value="area" >area</option>
        <option value="ingredient" >ingredient</option>
      </select>
      <input type="text" placeholder="Big Mc" />
      <button type="button">
        <SearchIcon />
      </button>
    </HeaderWrapper>
  );
};
