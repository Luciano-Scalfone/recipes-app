import { fireEvent, render, screen } from "@testing-library/react";
import LoginProvider from "../../context/LoginContext";
import Signup from "./Signup";
import MealsProvider from "../../context/MealsContext";

describe("Signup Component", () => {
  let signupComponent;

  beforeEach(() => {
    signupComponent = render(
      <MealsProvider>
        <LoginProvider>
          <Signup />
        </LoginProvider>
      </MealsProvider>
    ).container;
  });

  test("Should exists", () => {
    expect(signupComponent).toBeDefined();
  });

  test("Should have a title like h4 element with text 'Sign up'", () => {
    const h4Element = signupComponent.querySelectorAll("h4")[0];

    expect(h4Element).toBeInTheDocument();
    expect(h4Element.textContent).toBe("Sign up");
  });

  test("Should have a parent element with ClassName 'signup-wrapper'", () => {
    const parentElement = signupComponent.querySelector(".signup-wrapper");

    expect(parentElement).toBeInTheDocument();
  });

  test("Should have h4 like last child with text 'Already have an account? Sign in'", () => {
    const h4Element = signupComponent.querySelector("h4:last-child");

    expect(h4Element).toBeInTheDocument();
    expect(h4Element.textContent).toBe("Already have an account? Sign in");
  });

  test("Should have span element in h4 element with text 'Sign in'", () => {
    const h4Element = signupComponent.querySelector("h4:last-child");
    const spanElement = h4Element.querySelector("span");

    expect(spanElement).toBeInTheDocument();
    expect(spanElement.textContent).toBe("Sign in");
  });

  test("Should have a button with text 'Create Account'", () => {
    const buttonElement = signupComponent.querySelector("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe("Create Account");
  });

  describe("Full Name Input", () => {
    let fullNameLabel;

    beforeEach(() => {
      fullNameLabel = screen.getByTestId("full-name-label");
    });

    test("Should label exists and is a label tag", () => {
      expect(fullNameLabel).toBeInTheDocument();
      expect(fullNameLabel.tagName).toBe("LABEL");
    });

    test("Should have a imput type text", () => {
      const inputTypeTextElement =
        fullNameLabel.querySelector("input[type=text]");

      expect(inputTypeTextElement).toBeInTheDocument();
    });

    test("Should have in input a placeholder with text 'Full Name'", () => {
      const inputTypeTextElement =
        fullNameLabel.querySelector("input[type=text]");

      expect(inputTypeTextElement.placeholder).toBe("Full Name");
    });

    test("Should have a person icon", () => {
      const personIconElement = fullNameLabel.querySelector(".bi-person");

      expect(personIconElement).toBeInTheDocument();
    });
  });

  describe("Email Input", () => {
    let emailLabel;

    beforeEach(() => {
      emailLabel = screen.getByTestId("email-label");
    });

    test("Should label exists and is a label tag", () => {
      expect(emailLabel).toBeInTheDocument();
      expect(emailLabel.tagName).toBe("LABEL");
    });

    test("Should have a imput type email", () => {
      const inputTypeEmailElement =
        emailLabel.querySelector("input[type=email]");

      expect(inputTypeEmailElement).toBeInTheDocument();
    });

    test("Should have in input a placeholder with text 'Email'", () => {
      const inputTypeEmailElement =
        emailLabel.querySelector("input[type=email]");

      expect(inputTypeEmailElement.placeholder).toBe("Email");
    });

    test("Should have a person icon", () => {
      const envelopeIconElement = emailLabel.querySelector(".bi-envelope");

      expect(envelopeIconElement).toBeInTheDocument();
    });
  });

  describe("Password Input", () => {
    let passwordLabel;

    beforeEach(() => {
      passwordLabel = screen.getByTestId("password-label");
    });

    test("Should label exists and is a label tag", () => {
      expect(passwordLabel).toBeInTheDocument();
      expect(passwordLabel.tagName).toBe("LABEL");
    });

    test("Should have a imput type password", () => {
      const inputTypePasswordlElement = passwordLabel.querySelector(
        "input[type=password]"
      );

      expect(inputTypePasswordlElement).toBeInTheDocument();
    });

    test("Should have in input a placeholder with text 'Password'", () => {
      const inputTypePasswordlElement = passwordLabel.querySelector(
        "input[type=password]"
      );

      expect(inputTypePasswordlElement.placeholder).toBe("Password");
    });

    test("Should have a Lock icon", () => {
      const lockIconElement = passwordLabel.querySelector(".bi-lock");

      expect(lockIconElement).toBeInTheDocument();
    });

    test("Should have a slashedEye icon", () => {
      const slashedEyeIconElement =
        passwordLabel.querySelector(".bi-eye-slash");

      expect(slashedEyeIconElement).toBeInTheDocument();
    });

    test("Should have a OpenEye icon when user click", () => {
      const divElement = passwordLabel.querySelector("div");
      fireEvent.click(divElement);
      const openEyeIconElement = passwordLabel.querySelector(".bi-eye");

      expect(openEyeIconElement).toBeInTheDocument();
    });
  });

  describe("Confirm Password Input", () => {
    let confirmPasswordLabel;

    beforeEach(() => {
      confirmPasswordLabel = screen.getByTestId("confirm-password-label");
    });

    test("Should label exists and is a label tag", () => {
      expect(confirmPasswordLabel).toBeInTheDocument();
      expect(confirmPasswordLabel.tagName).toBe("LABEL");
    });

    test("Should have a imput type password", () => {
      const inputTypePasswordlElement = confirmPasswordLabel.querySelector(
        "input[type=password]"
      );

      expect(inputTypePasswordlElement).toBeInTheDocument();
    });

    test("Should have in input a placeholder with text 'Confirm Password'", () => {
      const inputTypePasswordlElement = confirmPasswordLabel.querySelector(
        "input[type=password]"
      );

      expect(inputTypePasswordlElement.placeholder).toBe("Confirm Password");
    });

    test("Should have a Lock icon", () => {
      const lockIconElement = confirmPasswordLabel.querySelector(".bi-lock");

      expect(lockIconElement).toBeInTheDocument();
    });

    test("Should have a slashedEye icon", () => {
      const slashedEyeIconElement =
        confirmPasswordLabel.querySelector(".bi-eye-slash");

      expect(slashedEyeIconElement).toBeInTheDocument();
    });

    test("Should have a OpenEye icon when user click", () => {
      const divElement = confirmPasswordLabel.querySelector("div");
      fireEvent.click(divElement);
      const openEyeIconElement = confirmPasswordLabel.querySelector(".bi-eye");

      expect(openEyeIconElement).toBeInTheDocument();
    });
  });
});
