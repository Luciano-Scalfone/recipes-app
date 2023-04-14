import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilterProvider from "../../context/FilterContext";
import MealsProvider from "../../context/MealsContext";
import { PrepareInstructions } from "./PrepareInstructions";
import LoginProvider from "../../context/LoginContext";
import renderWithRouter from "../../helpers/renderWithRouter";

describe("PrepareInstructions Component", () => {
  let containerElement;
  const DATA = {
    name: "big_mac_image",
    videoLink: "some_link",
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  };

  beforeEach(async () => {
    await act(async () => {
      renderWithRouter(
        <MealsProvider>
          <FilterProvider>
            <LoginProvider>
              <PrepareInstructions meal={DATA} />
            </LoginProvider>
          </FilterProvider>
        </MealsProvider>
      );
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

  test("Should have a props src and title in iframe element with correct data", () => {
    const videoElement = containerElement.querySelector("iframe");

    expect(videoElement.title).toEqual(DATA.name);
    expect(videoElement.src).toEqual(`http://localhost:3000/${DATA.videoLink}`);
  });

  test("Should have some checkbox input elements", () => {
    const checkboxElement =
      containerElement.querySelectorAll('[type="checkbox"]');

    expect(checkboxElement.length).toBeGreaterThan(0);
    expect(checkboxElement.length).toEqual(DATA.ingredients.length);
  });

  test("Should have a button element as last child and contain the word 'done'", () => {
    const buttonElement = containerElement.querySelector("button:last-child");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual("Done");
  });
});
