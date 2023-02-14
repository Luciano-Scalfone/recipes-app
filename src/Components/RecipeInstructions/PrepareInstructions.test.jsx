import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PrepareInstructions } from "./PrepareInstructions";

describe("CardDetails Component", () => {
  let containerElement;
  const DATA = {
    id: "1",
    name: "big_mac",
    image: "big_mac_image",
    instructions: ["about_preparation", "preparation_about"],
    area: "American",
    category: "Beef",
    ingredients: ["ingredient1", "ingredient2"],
  };

  beforeEach(async () => {
    await act(async () => {
      render(<PrepareInstructions />);
    });
    
    containerElement = screen.getByTestId("prepare-instructions");
  });

  test("Should have a element with testid 'prepare-instructions'", () => {
    expect(containerElement).toBeInTheDocument();
  });

});
