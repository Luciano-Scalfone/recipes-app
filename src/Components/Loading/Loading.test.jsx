import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading Component", () => {
  test("Should have div element in first-child with testid 'loading-component'", () => {
    render(<Loading />);
    const containerElement = screen.getByTestId("loading-component");
   
    expect(containerElement).toBeInTheDocument();
  });
});
