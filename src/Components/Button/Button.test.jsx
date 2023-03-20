import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginProvider from "../../context/LoginContext";
import { Button } from "./Button";

describe("Button Component", () => {
  let buttonComponent;

  beforeEach(async () => {
    await act(() => {
      buttonComponent = render(
        <LoginProvider>
          <Button />
        </LoginProvider>
      ).container;
    });
  });

  test("Should exists", () => {
    expect(buttonComponent).toBeDefined();
  });
});
