import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";
import { CardWrapper, PillWrapper } from "./CardStyles";

export const Cards = ({ name, imageSrc, id, onCardClick }) => {
  const { recipesMaked } = useContext(MealsContext);
  const [ renderPill, setRenderPill ] = useState(false);

  useEffect(() => {
    setRenderPill(recipesMaked.includes(id));
  }, []);

  return (
    <CardWrapper data-testid="cards-element" onClick={() => onCardClick(id)}>
      <img src={imageSrc} alt={`${name} meal`} />
      <h2>{name}</h2>
      {
        renderPill && <PillWrapper  data-testid="pill-maked"></PillWrapper>
      }  
    </CardWrapper>
  );
};
