import { CardDetails } from "./CardDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("CardDetails Component", () => {
  let containerElement;
  const DATA = {
    name: "big_mac",
    image: "big_mac_image",
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
});
