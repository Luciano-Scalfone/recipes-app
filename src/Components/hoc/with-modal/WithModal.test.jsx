import { render } from "@testing-library/react";
import { WithModal } from "./WithModal";

describe("WithModal Component", () => {
  // const elementTest = <h1>Hello World</h1>;
  // const WithModalMock = WithModal(elementTest);
  let withModalComponent;

  beforeEach(() => {
    // withModalComponent = render(<WithModalMock />).container;
    withModalComponent = render(<WithModal />).container;
  });

  test("Should exists", () => {
    expect(withModalComponent).toBeDefined();
  });

  // test("Should have a section element with className 'with-modal-wrapper__section'", () => {
  //   const sectionElement = withModalComponent.querySelector(".with-modal-wrapper__section");
  //   console.log(sectionElement)
  //   expect(sectionElement).toBeInTheDocument();
  //   expect(sectionElement.tagName).toBe("SECTION");
  // })
  //TODO: Fazer o test deste HOC, pelo que li precisaria usar o Enzyme
});
