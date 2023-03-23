import { useContext } from "react";
import { CloseIcon, EnvelopeIcon, LockIcon, OpenEyeIcon, PersonIcon } from "../../assets/Icons";
import { LoginContext } from "../../context/LoginContext";
import { WithModal } from "../hoc/with-modal/WithModal";
import { SignupWrapper } from "./SignupStyles";

const Signup = () => {
  const { setShowSignupModal } = useContext(LoginContext);

  return (
    <SignupWrapper>
      <div
        className="signup-wrapper__cross-icon"
        onClick={() => setShowSignupModal(false)}
      >
        <CloseIcon />
      </div>

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
        <input type="password" placeholder="Password"/>
        <OpenEyeIcon />
      </label>

      <label
        data-testid="confirm-password-label"
        className="signup-wrapper__input-field"
      >
        <LockIcon />
        <input type="password" placeholder="Confirm Password"/>
        <OpenEyeIcon />
      </label>
    </SignupWrapper>
  );
};

export default WithModal(Signup);
