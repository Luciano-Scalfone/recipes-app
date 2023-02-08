import { CardDetails } from "./CardDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("CardDetails Component", () => {
  let containerElement;
  const DATA = {
    name: "big_mac",
    image: "big_mac_image",
    instructions: "about_preparation",
    area: "American",
    category: "Beef",
  };

  beforeEach(async () => {
    await act(async () => render(<CardDetails meal={DATA} />));

    containerElement = screen.getByTestId("cards-details");
  });

  test("Should have a element with testid 'cards-details'", () => {
    expect(containerElement).toBeInTheDocument();
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

  test("Should have a p component with the meal description", () => {
    const pElement = containerElement.getElementsByTagName("p")[0];

    expect(pElement).toBeInTheDocument();
    expect(pElement.textContent).toEqual(DATA.instructions);
  });

  test("Should have a h3 component with the testid areaAndCategory", () => {
    const elementByTestId = screen.getByTestId("areaAndCategory");
    const elementByTagh3 = containerElement.getElementsByTagName("h3");

    expect(elementByTestId.isSameNode(elementByTagh3[0])).toEqual(true);
  });

  test("Should have a component with testid areaAndCategory containing area and category", () => {
    const component = screen.getByTestId("areaAndCategory");

    expect(component.textContent).toEqual(
      `Area: ${DATA.area} | Category: ${DATA.category}`
    );
  });
});
