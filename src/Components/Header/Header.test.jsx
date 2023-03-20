import { render, screen } from "@testing-library/react";
import FilterProvider from "../../context/FilterContext";
import MealsProvider from "../../context/MealsContext";
import { Header } from "./Header";

describe("Header Component", () => {
  let headerComponent;

  beforeEach(() => {
    const { container } = render(
      <MealsProvider>
        <FilterProvider>
          <Header />
        </FilterProvider>
      </MealsProvider>
    );

    headerComponent = container;
  });

  test("Should have a select element", () => {
    const selectElement = headerComponent.querySelector("select");

    expect(selectElement).toBeInTheDocument();
  });

  test("Should have a select element", () => {
    const inputElement = headerComponent.querySelector("input");

    expect(inputElement).toBeInTheDocument();
  });

  test("Should have a button element", () => {
    const buttonElement = headerComponent.querySelector("button");

    expect(buttonElement).toBeInTheDocument();
  });

  test("Select Element should have specific options", () => {
    const options = ["name", "first-letter", "category", "area", "ingredient"];
    const selectElement = headerComponent.querySelector("select");
    const selectOptionsList = [...selectElement.children].map(
      (option) => option.value
    );

    expect(selectElement.children.length).toBe(options.length);
    expect(selectOptionsList).toEqual(options);
  });

  test("Button element should have a bi-search icon", () => {
    const buttonElement = headerComponent.querySelector("button");
    const buttonIcon = buttonElement.querySelector(".bi-search");

    expect(buttonIcon).toBeInTheDocument();
  });

  test("Should have a 'sign in' button", () => {
    const signInButton = screen.getByText('Sign in');

    expect(signInButton).toBeInTheDocument();
    expect(signInButton.tagName).toBe('BUTTON');
  });
});
