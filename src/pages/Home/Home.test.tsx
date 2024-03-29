import FilterProvider from "../../context/FilterContext";
import LoginProvider from "../../context/LoginContext";
import MealsProvider from "../../context/MealsContext";
import renderWithRouter from "../../helpers/renderWithRouter";
import Home from "./Home";

describe("Home Component", () => {
  let homeRendered;

  beforeEach(() => {
    homeRendered = renderWithRouter(
      <MealsProvider>
        <FilterProvider>
          <LoginProvider>
            <Home />
          </LoginProvider>
        </FilterProvider>
      </MealsProvider>
    );
  });

  test("Should exist", () => {
    const homeComponent = homeRendered.getByTestId("home-component");

    expect(homeComponent).toBeDefined();
  });

  test("Should have a header element", () => {
    const headerElement = homeRendered.container.querySelector("header");

    expect(headerElement).toBeInTheDocument();
  });

  test("Should have a body element", () => {
    const bodyComponent = homeRendered.container.querySelector("main");

    expect(bodyComponent).toBeInTheDocument();
  });

  test("Should have a footer element", () => {
    const footerComponent = homeRendered.container.querySelector("footer");

    expect(footerComponent).toBeInTheDocument();
  });
});
