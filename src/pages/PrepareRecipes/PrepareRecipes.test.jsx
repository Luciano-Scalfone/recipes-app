import { render, screen } from "@testing-library/react";
import { PrepareRecipes } from "./PrepareRecipes";

describe("PrepareRecipes Page", () => {
  let containerElement;

  beforeEach(() => {
    render(<PrepareRecipes />);

    containerElement = screen.getByTestId("prepare-recipes");
  });

  test("Should have a component with testid 'prepare-recipes'", () => {
    expect(containerElement).toBeInTheDocument();
  });

  test("Should have a Footer element in last child", () => {
    const footerElement = containerElement.getElementsByTagName("footer")[0];

    expect(footerElement).toBeInTheDocument();
  });
});
