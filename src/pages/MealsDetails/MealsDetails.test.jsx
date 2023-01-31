import { MealsDetails } from "./MealsDetails";
import { render, screen } from "@testing-library/react";

describe("Meals Page", () => {
  test("Should have a element with testid 'meals-details'", () => {
    render(<MealsDetails />);

    expect(screen.getByTestId("meals-details")).toBeInTheDocument();
  });
});
