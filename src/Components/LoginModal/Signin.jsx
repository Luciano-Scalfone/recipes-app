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
import Input from "../Input";
import { SigninWrapper } from "./SigninStyles";

const Signin = () => {
  const { setShowSigninModal, setShowSignupModal } = useContext(LoginContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setshowPassword] = useState(false);
  const showPasswordComponent = (
    <div onClick={() => setshowPassword(!showPassword)}>
      {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );

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

      <h4 className="signin-wrapper__h4-title">Sign in</h4>

      <Input
        type="email"
        placeholder="Email"
        ref={emailRef}
        leftIcon={<EnvelopeIcon />}
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        ref={passwordRef}
        leftIcon={<LockIcon />}
        rightIcon={showPasswordComponent}
      />

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
        Don't have an account?{" "}
        <span onClick={handleSignupClick}>sign up now</span>
      </h4>
    </SigninWrapper>
  );
};

export default WithModal(Signin);
