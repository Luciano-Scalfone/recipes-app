import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  let footerElement;

  beforeEach(() => {
    const { container } = render(<Footer />);
    footerElement = container;
  });

  test("Should have a h3 element", () => {
    const h3Element = footerElement.querySelector("h3");

    expect(h3Element).toBeInTheDocument();
  });

  test("Should have two 'a' element", () => {
    const aElement = footerElement.querySelectorAll("a");

    expect(aElement.length).toBe(3);
  });
});
