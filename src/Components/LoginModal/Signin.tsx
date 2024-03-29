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
import { fetchPostData } from "../../services/fetchs";
import { InputTargetType } from "../../interfaces/types";

const Signin: React.FC = () => {
  const { setShowSigninModal, setShowSignupModal } = useContext(LoginContext);
  const userRef = useRef({ email: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);

  const showPasswordComponent = (
    <div className="pointer" onClick={() => setshowPassword(!showPassword)}>
      {showPassword ? <OpenEyeIcon /> : <SlashedEyeIcon />}
    </div>
  );

  const handleSignupClick = (): void => {
    setShowSigninModal(false);
    setShowSignupModal(true);
  };

  const handleInputChanges = ({ target }: InputTargetType): void => {
    userRef.current = { ...userRef.current, [target.name]: target.value };
  };

  const handleLogInButton = async (): Promise<void> => {
    const { email, password } = userRef.current;
    const postUser = await fetchPostData("http://localhost:8080/auth/login", {
      email,
      password,
    });

    if (postUser.access_token) {
      localStorage.setItem("userToken", postUser.access_token);
      setShowSigninModal(false);
    }
  };

  return (
    <SigninWrapper>
      <h4 className="signin-wrapper__h4-title">Sign in</h4>

      <Input
        type="email"
        placeholder="Email"
        name="email"
        handleChange={handleInputChanges}
        leftIcon={<EnvelopeIcon />}
        testId="email-input"
      />

      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        handleChange={handleInputChanges}
        leftIcon={<LockIcon />}
        rightIcon={showPasswordComponent}
        testId="password-input"
      />

      <button onClick={handleLogInButton}>Sign in</button>

      <h4 className="signin-wrapper__sign-up">
        Don't have an account?{" "}
        <span onClick={handleSignupClick}>sign up now</span>
      </h4>
    </SigninWrapper>
  );
};

export default WithModal(Signin);
