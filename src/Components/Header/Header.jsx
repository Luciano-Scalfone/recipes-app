import { useContext, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router";
import { PersonIcon, SearchIcon } from "../../assets/Icons";
import { FilterContext } from "../../context/FilterContext";
import { LoginContext } from "../../context/LoginContext";
import { FILTER_INITIAL_STATE } from "../../interfaces/filterInitialState";
import { HeaderWrapper } from "./HeaderStyles";

export const Header = () => {
  const [filter, setFilter] = useState(FILTER_INITIAL_STATE);
  const { setActiveFilter } = useContext(FilterContext);
  const { setShowSigninModal, setShowSignupModal, userAuthenticated } =
    useContext(LoginContext);
  const navigate = useNavigate();

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

  const handleSigninButton = () => {
    setShowSigninModal(true);
  };

  const handleSignupButton = () => {
    setShowSignupModal(true);
  };

  const handlePersonIconClick = () => {
    navigate(`/profile/${userAuthenticated}`);
  };

  return (
    <HeaderWrapper>
      <select name="filterClass" onChange={(e) => onFilterChange(e)}>
        <option value="name" defaultValue>
          name
        </option>
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
      <button
        onClick={() => onFilterButtonClick()}
        type="button"
        className="filter-button"
      >
        <SearchIcon />
      </button>

      {userAuthenticated ? (
        <div onClick={handlePersonIconClick}>
          <PersonIcon />
        </div>
      ) : (
        <>
          <button onClick={handleSignupButton}>Create Account</button>
          <button onClick={handleSigninButton}>Sign in</button>
        </>
      )}
    </HeaderWrapper>
  );
};
