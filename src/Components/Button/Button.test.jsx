import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginProvider from "../../context/LoginContext";
import { Button } from "./Button";
import MealsProvider from "../../context/MealsContext";

describe("Button Component", () => {
  let buttonComponent;

  beforeEach(async () => {
    await act(() => {
      buttonComponent = render(
        <MealsProvider>
          <LoginProvider>
            <Button />
          </LoginProvider>
        </MealsProvider>
      ).container;
    });
  });

  test("Should exists", () => {
    expect(buttonComponent).toBeDefined();
  });
});
