import { act } from "react-dom/test-utils";
import renderWithRouter from "../../helpers/renderWithRouter";
import { Button } from "./Button";

describe("Button Component", () => {
  let buttonComponent;

  beforeEach(async () => {
    await act(async () => {
      buttonComponent = renderWithRouter(<Button />).container;
    });
  });

  test("Should exists", async () => {
    expect(buttonComponent).toBeDefined();
  });
});
