import React from "react";
import { render } from "@testing-library/react";
import { Cards } from "./Cards";

describe("Cards Component", () => {
  let CardsElement;
  let getText;

  beforeEach(() => {
    const { container, getByText } = render(
      <Cards name="some_name" imageSrc="some_url" />
    );

    CardsElement = container;
    getText = getByText;
  });

  test('Should be defined', () => {
    const CardsElement = render(<Cards />);

    expect(CardsElement).toBeDefined();
    expect(CardsElement).not.toBeNull();
  });

  test("Should have a div element", () => {
    const divElement = CardsElement.querySelector("div");

    expect(divElement).toBeInTheDocument();
  });

  test("Should have an img element like first child in div element", () => {
    const imgElement = CardsElement.querySelector("div img:first-child");

    expect(imgElement).toBeInTheDocument();
  });

  test("Should have a h2 element like last child position in div element", () => {
    const h2Element = CardsElement.querySelector("div h2:last-child");

    expect(h2Element).toBeInTheDocument();
  });

  test("Should pass props.name to h2 element", () => {
    const nameProps = getText("some_name");

    expect(nameProps).toBeInTheDocument();
  });

  test("Should pass props.imageSrc to image soucer attribute", () => {
    const imageSrc = CardsElement.querySelector('[src="some_url"]');

    expect(imageSrc).toBeInTheDocument();
  });
});
