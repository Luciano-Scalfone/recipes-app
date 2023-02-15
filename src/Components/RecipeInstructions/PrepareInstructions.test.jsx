import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PrepareInstructions } from "./PrepareInstructions";

describe("PrepareInstructions Component", () => {
  let containerElement;
  const DATA = {
    id: "1",
    name: "big_mac",
    image: "big_mac_image",
    instructions: ["about_preparation", "preparation_about"],
    area: "American",
    category: "Beef",
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
  test("Should have a h1 component", () => {
    const h1Element = containerElement.querySelector("h1");

    expect(h1Element).toBeInTheDocument();
  });

  test("Should have the meal name in h1 component", () => {
    const h1Element = containerElement.getElementsByTagName("h1")[0];

    expect(h1Element.textContent).toEqual(DATA.name);
  });

  test("Should have a h3 component with the testid area-and-category", () => {
    const elementByTestId = screen.getByTestId("area-and-category");

    expect(elementByTestId.tagName).toEqual("H3");
  });

  test("Should have a component with testid area-and-category containing area and category", () => {
    const component = screen.getByTestId("area-and-category");

    expect(component.textContent).toEqual(
      `Area: ${DATA.area} | Category: ${DATA.category}`
    );
  });
});
