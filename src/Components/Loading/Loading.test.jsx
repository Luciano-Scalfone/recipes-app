import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading Component", () => {
  test("Should exists", () => {
    const containerElement = render(<Loading />).container;
   
    expect(containerElement).toBeDefined();
  });
});
