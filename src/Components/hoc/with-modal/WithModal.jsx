import { useContext } from "react";
import { CloseIcon } from "../../../assets/Icons";
import { LoginContext } from "../../../context/LoginContext";
import { WithModalWrapper } from "./WithModalStyles";

export const WithModal = (Component) => {
  const ComponentWithModal = () => {
    const { setShowSigninModal, setShowSignupModal } = useContext(LoginContext);

    return (
      <WithModalWrapper>
        <section className="with-modal-wrapper__section">
          <div
            className="signin-wrapper__cross-icon"
            onClick={() => {
              setShowSigninModal(false);
              setShowSignupModal(false);
            }}
          >
            <CloseIcon />
          </div>
          <Component />
        </section>
      </WithModalWrapper>
    );
  };

  return ComponentWithModal;
};
