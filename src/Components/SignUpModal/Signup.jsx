import { useContext, useRef, useState } from "react";
import {
  EnvelopeIcon,
  LockIcon,
  OpenEyeIcon,
  PersonIcon,
  SlashedEyeIcon,
} from "../../assets/Icons";
import { LoginContext } from "../../context/LoginContext";
import { WithModal } from "../hoc/with-modal/WithModal";
import Input from "../Input";
import { SignupWrapper } from "./SignupStyles";

const Signup = () => {
  const { setShowSignupModal, setShowSigninModal } = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const userRef = useRef({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const showPasswordComponent = (
    <div className="pointer" onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );
  const showConfirmPasswordComponent = (
    <div className="pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
      {showConfirmPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );

  const handleInputChanges = ({ target }) => {
    userRef.current = { ...userRef.current, [target.name]: target.value };
  };

  const handleSigninClick = () => {
    setShowSigninModal(true);
    setShowSignupModal(false);
  };

  return (
    <SignupWrapper>
      <h4 className="signup-wrapper__h4-title">Sign up</h4>

      <Input
        type="text"
        placeholder="Full Name"
        name="fullName"
        handleChange={handleInputChanges}
        leftIcon={<PersonIcon />}
        testId="full-name-label"
      />

      <Input
        type="email"
        placeholder="Email"
        name="email"
        handleChange={handleInputChanges}
        leftIcon={<EnvelopeIcon />}
        testId="email-label"
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        handleChange={handleInputChanges}
        leftIcon={<LockIcon />}
        rightIcon={showPasswordComponent}
        testId="password-label"
      />

      <Input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm Password"
        name="confirmPassword"
        handleChange={handleInputChanges}
        leftIcon={<LockIcon />}
        rightIcon={showConfirmPasswordComponent}
        testId="confirm-password-label"
      />

      <button onClick={() => console.log(userRef.current)}>
        Create Account
      </button>

      <h4 className="signup-wrapper__sign-in">
        Already have an account?{" "}
        <span onClick={handleSigninClick}>Sign in</span>
      </h4>
    </SignupWrapper>
  );
};

export default WithModal(Signup);
