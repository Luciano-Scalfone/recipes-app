import { WithModalWrapper } from "./WithModalStyles";

export const WithModal = (Component) => {
  const componentWithModal = () => {
    return (
      <WithModalWrapper>
        <section className="with-modal-wrapper__section">
          <Component />
        </section>
      </WithModalWrapper>
    );
  };

  return componentWithModal;
};
