import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Signin } from "./Signin";

describe("Login Component", () => {
  let loginComponent;

  beforeEach(async () => {
    await act(() => {
      loginComponent = render(<Signin />).container;
    });
  });

  test("Should exists", () => {
    expect(loginComponent).toBeDefined();
  });
});
