import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FilterProvider from "../../context/FilterContext";
import MealsProvider from "../../context/MealsContext";
import renderWithRouter from "../../helpers/renderWithRouter";
import * as mocks from "../../services/fetchs";
import { Body } from "./Body";
import { vi } from "vitest";


describe("Body Component", () => {
  const data = [
    {
      idMeal: "001",
      strMeal: "corba",
      strMealThumb: "corba_image",
    },
    {
      idMeal: "002",
      strMeal: "big_mac",
      strMealThumb: "big_mac_image",
    },
  ];

  beforeEach(async () => {
    const mockFunction = mocks;
    mockFunction.fetchAllCategories = vi.fn().mockReturnValue(data);

    await act(async () => {
      renderWithRouter(
        <MealsProvider>
          <FilterProvider>
            <Body />
          </FilterProvider>
        </MealsProvider>
      );
    });
  });

  test("Should have two card elements", async () => {
    const cardElements = await screen.findAllByTestId("cards-element");

    expect(cardElements).toHaveLength(2);
  });
});
