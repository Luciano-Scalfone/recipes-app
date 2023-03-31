import { LabelWrapper } from "./InputStyles";

export const Input = ({type, placeholder, name, handleChange, leftIcon, rightIcon, testId}) => {

  return (
    <LabelWrapper data-testid={testId} >
      {leftIcon || null}
      <input type={type} placeholder={placeholder} name={name} onChange={handleChange} />
      {rightIcon || null}
    </LabelWrapper>
  );
};
