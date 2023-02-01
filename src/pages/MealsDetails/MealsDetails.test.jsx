import { MealsDetails } from "./MealsDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Meals Page", () => {
  const DATA = [
    {
      strMeal: "big_mac",
      strMealThumb: "big_mac_image",
    },
  ];

  beforeEach(async () => {
    const mockFunction = require("../../services/fetchs");
    mockFunction.fetchById = jest.fn().mockReturnValue(DATA);

    await act(async () => render(<MealsDetails />));
  });

  test("Should have a element with testid 'meals-details'", () => {
    expect(screen.getByTestId("meals-details")).toBeInTheDocument();
  });

  test("Should have an image component in element with testid 'meals-details'", () => {
    const continerElement = screen.getByTestId("meals-details");
    const imgElement = continerElement.getElementsByTagName("img")[0];

    expect(imgElement).toBeInTheDocument();
  });

  test("Should have a property src in img with correct URL", () => {
    const continerElement = screen.getByTestId("meals-details");
    const propSrcFromImg = continerElement
      .getElementsByTagName("img")[0]
      .getAttribute("src");

    expect(propSrcFromImg).toEqual(DATA[0].strMealThumb);
  });

  test("Should have a h1 component in element with testid 'meals-details'", () => {
    const continerElement = screen.getByTestId("meals-details");
    const h1Element = continerElement.getElementsByTagName("h1")[0];

    expect(h1Element).toBeInTheDocument();
  });

  test("Should have the meal name in h1 component", () => {
    const continerElement = screen.getByTestId("meals-details");
    const h1Element = continerElement.getElementsByTagName("h1")[0];

    expect(h1Element.textContent).toEqual(DATA[0].strMeal);
  });
});
