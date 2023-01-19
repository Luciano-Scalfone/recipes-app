import { SearchIcon } from "../../assets/icons";
import { HeaderWrapper } from "./HeaderStyles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <select>
        <option>test</option>
        <option>test1</option>
        <option>test2</option>
      </select>
      <input type="text" placeholder="Big Mc" />
      <button type="button">
        <SearchIcon />
      </button>
    </HeaderWrapper>
  );
};
