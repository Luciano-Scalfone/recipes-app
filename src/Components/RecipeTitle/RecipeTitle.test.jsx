import { render } from "@testing-library/react";
import RecipeTitle from "./RecipeTitle";

describe("RecipeTitle Component", () => {
  const DATA = { name: "name", category: "category", area: "Area" };

  let containerElement;
  beforeEach(() => {
    const { getByTestId } = render(<RecipeTitle recipe={DATA} />);

    containerElement = getByTestId("recipe-title-component");
  });

  test("Should have a div element with testid 'recipe-title-component'", () => {
    expect(containerElement).toBeInTheDocument();
  });

  test("Should have a h1 component", () => {
    const h1Element = containerElement.querySelector("h1");

    expect(h1Element).toBeInTheDocument();
  });

  test("Should have the props.name in h1 component", () => {
    const h1Element = containerElement.querySelector("h1");

    expect(h1Element.textContent).toEqual(DATA.name);
  });

  test("Should have a h3 component", () => {
    const h3Element = containerElement.querySelector("h3");

    expect(h3Element).toBeInTheDocument();
  });

  test("Should have the props.area and props.category in h3 component", () => {
    const h3Element = containerElement.querySelector("h3");

    expect(h3Element.textContent).toEqual(
      `Area: ${DATA.area} | Category: ${DATA.category}`
    );
  });
});
