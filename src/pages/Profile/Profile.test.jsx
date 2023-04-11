import { render } from "@testing-library/react";
import { Profile } from "./Profile";

describe("Profile Page", () => {
  let profileComponent;

  beforeEach(() => {
    profileComponent = render(<Profile />).container;
  });

  test("Should exists", () => {
    expect(profileComponent).toBeDefined();
  });
});
