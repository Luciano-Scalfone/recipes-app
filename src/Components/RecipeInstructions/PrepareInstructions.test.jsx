import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PrepareInstructions } from "./PrepareInstructions";

describe("PrepareInstructions Component", () => {
  let containerElement;
  const DATA = {
    id: "1",
    image: "big_mac_image",
    instructions: ["about_preparation", "preparation_about"],
    ingredients: ["ingredient1", "ingredient2"],
  };

  beforeEach(async () => {
    await act(async () => {
      render(<PrepareInstructions meal={DATA} />);
    });

    containerElement = screen.getByTestId("prepare-instructions");
  });

  test("Should have a element with testid 'prepare-instructions'", () => {
    expect(containerElement).toBeInTheDocument();
  });

  test("Should have a div element with testid 'recipe-title-component'", () => {
    const recipeTitle = screen.getByTestId("recipe-title-component");

    expect(recipeTitle).toBeInTheDocument();
  });

  test("Should have an iframe element ", () => {
    const videoElement = containerElement.querySelector("iframe");

    expect(videoElement).toBeInTheDocument();
  });
});
