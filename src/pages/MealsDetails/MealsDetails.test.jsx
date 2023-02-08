import { MealsDetails } from "./MealsDetails";
import { render, screen } from "@testing-library/react";

describe("Meals Page", () => {
  let containerElement;

  beforeEach(() => {
    render(<MealsDetails />);

    containerElement = screen.getByTestId("meals-details");
  });

  test("Should have a element with testid 'meals-details'", () => {
    expect(screen.getByTestId("meals-details")).toBeInTheDocument();
  });

  test("Should have a CardDetails Component", () => {
    const CardDetailsCompenent = screen.getByTestId("cards-details");

    expect(CardDetailsCompenent).toBeInTheDocument();
  });

  test("Should have a Footer element in last child", () => {
    const footerElement = containerElement.getElementsByTagName("footer")[0];

    expect(footerElement).toBeInTheDocument();
  });
});
