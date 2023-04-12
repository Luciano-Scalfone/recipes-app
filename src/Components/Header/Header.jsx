import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { PersonIcon, SearchIcon } from "../../assets/Icons";
import { FilterContext } from "../../context/FilterContext";
import { LoginContext } from "../../context/LoginContext";
import { HeaderWrapper } from "./HeaderStyles";

export const Header = () => {
  const { setActiveFilter } = useContext(FilterContext);
  const { setShowSigninModal, setShowSignupModal, userAuthenticated } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const filterRef = useRef(null);
  const selectRef = useRef(null);

  const onFilterButtonClick = () => {
    setActiveFilter({
      filterClass: selectRef.current.value,
      filterBy: filterRef.current.value,
    });
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
      <select name="filterClass" ref={selectRef}>
        <option value="name" defaultValue>
          name
        </option>
        <option value="first-letter">first letter</option>
        <option value="category">category</option>
        <option value="area">area</option>
        <option value="ingredient">ingredient</option>
      </select>
      <input ref={filterRef} name="filterBy" type="text" placeholder="Big Mc" />
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
