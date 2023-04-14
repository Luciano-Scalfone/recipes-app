import Profile from "./Profile";
import renderWithRouter from "../../helpers/renderWithRouter";
import MealsProvider from "../../context/MealsContext";

describe("Profile Page", () => {
  let profileComponent;

  beforeEach(() => {
    const component = renderWithRouter(
      <MealsProvider>
        <Profile />
      </MealsProvider>
    );

    profileComponent = component.container;
  });

  test("Should exists", () => {
    expect(profileComponent).toBeDefined();
  });
});
