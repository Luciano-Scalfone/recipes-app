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
    <div onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );
  const showConfirmPasswordComponent = (
    <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
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
      <h4>Sign up</h4>

      <Input
        type="text"
        placeholder="Full Name"
        name="fullName"
        handleChange={handleInputChanges}
        leftIcon={<PersonIcon />}
      />

      <Input
        type="email"
        placeholder="Email"
        name="email"
        handleChange={handleInputChanges}
        leftIcon={<EnvelopeIcon />}
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        handleChange={handleInputChanges}
        leftIcon={<LockIcon />}
        rightIcon={showPasswordComponent}
      />

      <Input
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Confirm Password"
        name="confirmPassword"
        handleChange={handleInputChanges}
        leftIcon={<LockIcon />}
        rightIcon={showConfirmPasswordComponent}
      />

      <button onClick={() => console.log(userRef.current)}>
        Create Account
      </button>

      <h4>
        Already have an account? <span onClick={handleSigninClick}>Sign in</span>
      </h4>
    </SignupWrapper>
  );
};

export default WithModal(Signup);
