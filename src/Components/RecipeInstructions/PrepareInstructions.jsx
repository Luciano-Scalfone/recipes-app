import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { MealsContext } from "../../context/MealsContext";
import { fetchPostData, getUserInformation } from "../../services/fetchs";
import RecipeTitle from "../RecipeTitle/RecipeTitle";
import { PrepareInstructionsWrapper } from "./PrepareInstructionsStyles";

export const PrepareInstructions = ({ meal }) => {
  const { videoLink, name, ingredients, instructions, id } = meal;
  const [ingredientsChecked, setIngredientsChecked] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { userAuthenticated } = useContext(LoginContext);
  const { setRecipesMaked } = useContext(MealsContext);
  const navigate = useNavigate();

  const isDoneButtonDisabled = () => {
    return ingredientsChecked?.every(
      (ingredient) => ingredient.isChecked === true
    );
  };

  const handleCheckboxClick = (event) => {
    const filteredIngredients = ingredientsChecked.filter(
      (ingredient) => ingredient.ingredientName !== event.target.id
    );

    setIngredientsChecked([
      ...filteredIngredients,
      { ingredientName: event.target.id, isChecked: event.target.checked },
    ]);
  };

  const handleOnClickbutton = () => {
    fetchPostData("http://localhost:8080/auth/register-recipe", {
      token: userAuthenticated,
      mealID: id,
    });
    navigate("/");
  };

  useEffect(() => {
    const ingredientsAssync = async () => {
      const modifiedIngredients = await ingredients?.map((ingredient) => {
        return { ingredientName: ingredient, isChecked: false };
      });

      setIngredientsChecked(modifiedIngredients);
    };

    ingredientsAssync();
  }, [ingredients]);

  useEffect(() => {
    const disabled = isDoneButtonDisabled();

    setButtonDisabled(!disabled);
  }, [ingredientsChecked]);

  useEffect(() => {
    return () => {
      (async () => {
        const mealsMaked = await getUserInformation(
          userAuthenticated,
          "recipes-maked"
        ).then((data) => data);

        setRecipesMaked(mealsMaked);
      })();
    };
  });

  return (
    <PrepareInstructionsWrapper
      className="container"
      data-testid="prepare-instructions"
    >
      <RecipeTitle recipe={meal} />
      <iframe
        src={videoLink}
        title={name}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ul>
        {ingredients?.map((ingredient, index) => {
          return (
            <li key={ingredient + index}>
              <label>
                <input
                  type="checkbox"
                  id={ingredient}
                  onChange={handleCheckboxClick}
                />
                {ingredient}
              </label>
            </li>
          );
        })}
      </ul>
      <ol data-testid="instructions-list" className="instructionList">
        <h4>Instructions:</h4>
        {instructions?.map((instruction, index) => {
          return <li key={`instruction-${index + 1}`}>{instruction}</li>;
        })}
      </ol>
      <button disabled={buttonDisabled} onClick={handleOnClickbutton}>
        Done
      </button>
    </PrepareInstructionsWrapper>
  );
};
