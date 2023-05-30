import { render } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  test("Should Exist", () => {
    const { container } = render(<Input />);

    expect(container).toBeDefined;
  });
});
