import React from "react";
import { render, screen } from "@testing-library/react";
import { Cards } from "./Cards";
import MealsProvider from "../../context/MealsContext";

describe("Cards Component", () => {
  let CardsElement;
  let getText;

  beforeEach(() => {
    const { container, getByText } = render(
      <MealsProvider>
        <Cards name="some_name" imageSrc="some_url" />
      </MealsProvider>
    );

    CardsElement = container;
    getText = getByText;
  });

  test("Should be defined", () => {
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

  test("Should have a h2 elementl", () => {
    const h2Element = CardsElement.querySelector("div h2");

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

  // test("Should have a div element with testid 'pill-maked' when meal.id exists in context.recipesDone", () => {
  //   const stateSetter = jest.fn();
  //   jest.spyOn(React, "useState").mockImplementation((stateValue) => [stateValue = true, stateSetter]);
  //   const divElement = screen.getByTestId("pill-maked");

  //   expect(divElement).toBeInTheDocument();
  // });

  // test("Should not have a div element with testid 'pill-maked' when meal.id doesn't exists in context.recipesDone", () => {
  //   const stateSetter = jest.fn();
  //   jest.spyOn(React, "useState").mockImplementation((stateValue) => [stateValue = false, stateSetter]);
  //   const divElement = screen.getByTestId("pill-maked");

  //   expect(divElement).not.toBeInTheDocument();
  // });
});
