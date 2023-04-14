import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginProvider from "../../context/LoginContext";
import Signin from "./Signin";
import MealsProvider from "../../context/MealsContext";

describe("Login Component", () => {
  let loginComponent;

  beforeEach(() => {
    loginComponent = render(
      <MealsProvider>
        <LoginProvider>
          <Signin />
        </LoginProvider>
      </MealsProvider>
    ).container;
  });

  test("Should exists", () => {
    expect(loginComponent).toBeDefined();
  });
});
