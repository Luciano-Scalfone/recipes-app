import { render } from "@testing-library/react";
import { Cards } from "./Cards";

describe("Cards Component", () => {
  let CardsElement;

  beforeEach(() => {
    const { container } = render(<Cards />);
    CardsElement = container;
  });

  test("Should have a div element", () => {
    const divElement = CardsElement.querySelector("div");

    expect(divElement).toBeInTheDocument();
  });

  test("Should have an img element like first child position in div element", () => {
    const imgElement = CardsElement.querySelector("div img:first-child");

    expect(imgElement).toBeDefined();
  });

  test("Should have a h2 element like last child position in div element", () => {
    const h2Element = CardsElement.querySelector("div h2:last-child");

    expect(h2Element).toBeDefined();
  });
});
