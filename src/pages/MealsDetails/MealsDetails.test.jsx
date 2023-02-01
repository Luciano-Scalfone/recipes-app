import { MealsDetails } from "./MealsDetails";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Meals Page", () => {
  let containerElement;
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

    containerElement = screen.getByTestId("meals-details");
  });

  test("Should have a element with testid 'meals-details'", () => {
    expect(screen.getByTestId("meals-details")).toBeInTheDocument();
  });

  test("Should have an image component in element with testid 'meals-details'", () => {
    const imgElement = containerElement.getElementsByTagName("img")[0];

    expect(imgElement).toBeInTheDocument();
  });

  test("Should have a property src in img with correct URL", () => {
    const propSrcFromImg = containerElement
      .getElementsByTagName("img")[0]
      .getAttribute("src");

    expect(propSrcFromImg).toEqual(DATA[0].strMealThumb);
  });

  test("Should have a h1 component in element with testid 'meals-details'", () => {
    const h1Element = containerElement.getElementsByTagName("h1")[0];

    expect(h1Element).toBeInTheDocument();
  });

  test("Should have the meal name in h1 component", () => {
    const h1Element = containerElement.getElementsByTagName("h1")[0];

    expect(h1Element.textContent).toEqual(DATA[0].strMeal);
  });

  test("Should have a Footer element in last child", () => {
    const footerElement = containerElement.getElementsByTagName("footer")[0];

    expect(footerElement).toBeInTheDocument();
  });
});
