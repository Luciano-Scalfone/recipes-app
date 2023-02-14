import { CardDetails } from "./CardDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("CardDetails Component", () => {
  let containerElement;
  const DATA = {
    name: "big_mac",
    image: "big_mac_image",
    instructions: ["about_preparation", "preparation_about"],
    area: "American",
    category: "Beef",
    ingredients: ["ingredient1", "ingredient2"],
  };

  beforeEach(async () => {
    await act(async () => render(<CardDetails meal={DATA} />));

    containerElement = screen.getByTestId("cards-details");
  });

  test("Should have a element with testid 'cards-details'", () => {
    expect(containerElement).toBeInTheDocument();
  });

  test("Should have a div element in element 'cards-details' and the element have testid 'details'", () => {
    const divComponent = screen.getByTestId("details");

    expect(divComponent.tagName).toEqual("DIV");
  });

  test("Should have an image component in element with testid 'cards-details'", () => {
    const imgElement = containerElement.getElementsByTagName("img")[0];

    expect(imgElement).toBeInTheDocument();
  });

  test("Should have a property src in img with correct URL", () => {
    const propSrcFromImg = containerElement
      .getElementsByTagName("img")[0]
      .getAttribute("src");

    expect(propSrcFromImg).toEqual(DATA.image);
  });

  test("Should have a h1 component in element with testid 'cards-details'", () => {
    const h1Element = containerElement.getElementsByTagName("h1")[0];

    expect(h1Element).toBeInTheDocument();
  });

  test("Should have the meal name in h1 component", () => {
    const h1Element = containerElement.getElementsByTagName("h1")[0];

    expect(h1Element.textContent).toEqual(DATA.name);
  });

  test("Should have a h3 component with the testid areaAndCategory", () => {
    const elementByTestId = screen.getByTestId("areaAndCategory");

    expect(elementByTestId.tagName).toEqual("H3");
  });

  test("Should have a component with testid areaAndCategory containing area and category", () => {
    const component = screen.getByTestId("areaAndCategory");

    expect(component.textContent).toEqual(
      `Area: ${DATA.area} | Category: ${DATA.category}`
    );
  });

  test("Should have a ul component", () => {
    const ulComponent = containerElement.querySelector("ul");

    expect(ulComponent).toBeInTheDocument();
  });

  test("Should have two li elements as ul children", () => {
    const ulComponent = containerElement.querySelector("ul");
    const liComponents = ulComponent.querySelectorAll("li");

    expect(liComponents).toHaveLength(2);
  });

  test("Should have a ol component", () => {
    const olComponent = containerElement.querySelector("ol");

    expect(olComponent).toBeInTheDocument();
  });

  test("Should have two li elements as ol children", () => {
    const olComponent = containerElement.querySelector("ol");
    const liComponents = olComponent.querySelectorAll("li");

    expect(liComponents).toHaveLength(2);
  });

  test("Should have a h4 element in ul element with text 'Ingredients'", () => {
    const ulComponent = containerElement.querySelector("ul");
    const h4Element = ulComponent.getElementsByTagName('h4')[0];
    
    expect(h4Element.textContent).toEqual('Ingredients:');
  });
  
  test("Should have a h4 element in ol element with text 'Instructions'", () => {
    const olComponent = containerElement.querySelector("ol");
    const h4Element = olComponent.getElementsByTagName('h4')[0];
    
    expect(h4Element.textContent).toEqual('Instructions:');
  });
});
