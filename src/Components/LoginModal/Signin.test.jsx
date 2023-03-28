import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginProvider from "../../context/LoginContext";
import Signin from "./Signin";

describe("Login Component", () => {
  let loginComponent;

  beforeEach(() => {
    loginComponent = render(
      <LoginProvider>
        <Signin />
      </LoginProvider>
    ).container;
  });

  test("Should exists", () => {
    expect(loginComponent).toBeDefined();
  });
});
