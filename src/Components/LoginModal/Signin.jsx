import { useContext, useRef, useState } from "react";
import {
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
  const userRef = useRef({email: '', password: ''});
  const [showPassword, setshowPassword] = useState(false);
  const showPasswordComponent = (
    <div className="pointer" onClick={() => setshowPassword(!showPassword)}>
      {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );

  const handleSignupClick = () => {
    setShowSigninModal(false);
    setShowSignupModal(true);
  };

  const handleInputChanges = ({ target }) => {
    userRef.current = { ...userRef.current, [target.name]: target.value };
  };

  // const handleLogInButton = async () => {

  // }

  return (
    <SigninWrapper>
      

      <h4 className="signin-wrapper__h4-title">Sign in</h4>

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

      <button
        onClick={() =>
          userRef.current
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
