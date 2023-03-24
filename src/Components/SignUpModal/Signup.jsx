import { useContext, useState } from "react";
import { CloseIcon, EnvelopeIcon, LockIcon, OpenEyeIcon, PersonIcon, SlashedEyeIcon } from "../../assets/Icons";
import { LoginContext } from "../../context/LoginContext";
import { WithModal } from "../hoc/with-modal/WithModal";
import { SignupWrapper } from "./SignupStyles";

const Signup = () => {
  const { setShowSignupModal } = useContext(LoginContext);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

  return (
    <SignupWrapper>
      <div
        className="signup-wrapper__cross-icon"
        onClick={() => setShowSignupModal(false)}
      >
        <CloseIcon />
      </div>

      <h4>Sign up</h4>

      <label
        data-testid="full-name-label"
        className="signup-wrapper__input-field"
      >
        <PersonIcon />
        <input type="text" placeholder="Full Name" />
      </label>

      <label
        data-testid="email-label"
        className="signup-wrapper__input-field"
      >
        <EnvelopeIcon />
        <input type="email" placeholder="Email"/>
      </label>

      <label
        data-testid="password-label"
        className="signup-wrapper__input-field"
      >
        <LockIcon />
        <input type={showPassword ? 'text' : 'password'} placeholder="Password"/>
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
        </div>
      </label>

      <label
        data-testid="confirm-password-label"
        className="signup-wrapper__input-field"
      >
        <LockIcon />
        <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password"/>
        <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
        </div>
      </label>

      <h4>Already have an account? <span>Sign in</span></h4>
    </SignupWrapper>
  );
};

export default WithModal(Signup);
