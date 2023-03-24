import { useContext, useRef, useState } from "react";
import {
  CloseIcon,
  EnvelopeIcon,
  LockIcon,
  OpenEyeIcon,
  SlashedEyeIcon,
} from "../../assets/Icons";
import { LoginContext } from "../../context/LoginContext";
import { WithModal } from "../hoc/with-modal/WithModal";
import { SigninWrapper } from "./SigninStyles";

const Signin = () => {
  const { setShowSigninModal, setShowSignupModal } = useContext(LoginContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setshowPassword] = useState(false);

  const handleSignupClick = () => {
    setShowSigninModal(false);
    setShowSignupModal(true);
  };

  return (
    <SigninWrapper>
      <div
        className="signin-wrapper__cross-icon"
        onClick={() => setShowSigninModal(false)}
      >
        <CloseIcon />
      </div>

      <h4>Sign in</h4>

      <label className="signin-wrapper__input-field">
        <EnvelopeIcon />
        <input type="email" placeholder="Email" ref={emailRef} />
      </label>

      <label className="signin-wrapper__input-field">
        <LockIcon />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          ref={passwordRef}
        />
        <div onClick={() => setshowPassword(!showPassword)}>
          {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
        </div>
      </label>

      <button
        onClick={() =>
          console.log({
            email: emailRef.current.value,
            senha: passwordRef.current.value,
          })
        }
      >
        Sign in
      </button>

      <h4 className="signin-wrapper__sign-up">
        Dont have an account?{" "}
        <span onClick={handleSignupClick}>sign up now</span>
      </h4>
    </SigninWrapper>
  );
};

export default WithModal(Signin);
