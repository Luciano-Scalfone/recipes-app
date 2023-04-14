import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilterProvider from "../../context/FilterContext";
import MealsProvider from "../../context/MealsContext";
import { PrepareRecipes } from "./PrepareRecipes";
import LoginProvider from "../../context/LoginContext";
import renderWithRouter from "../../helpers/renderWithRouter";

describe("PrepareRecipes Page", () => {
  let containerElement;

  beforeEach(async () => {
    await act(async () => {
      renderWithRouter(
        <MealsProvider>
          <FilterProvider>
            <LoginProvider>
              <PrepareRecipes />
            </LoginProvider>
          </FilterProvider>
        </MealsProvider>
      );
    });

    containerElement = screen.getByTestId("prepare-recipes");
  });

  test("Should have a component with testid 'prepare-recipes'", () => {
    expect(containerElement).toBeInTheDocument();
  });

  test("Should have a div element in first child with the testid 'prepare-instructions'", () => {
    const elementDivByFirstChild =
      containerElement.querySelector("div:first-child");
    const elementBytestid = screen.getByTestId("prepare-instructions");

    expect(elementBytestid.isSameNode(elementDivByFirstChild)).toBeTruthy();
  });

  test("Should have a Footer element in last child", () => {
    const footerElement = containerElement.querySelector("footer:last-child");

    expect(footerElement).toBeInTheDocument();
  });
});
