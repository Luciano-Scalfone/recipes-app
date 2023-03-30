import { LabelWrapper } from "./InputStyles";

export const Input = ({type, placeholder, name, handleChange, leftIcon, rightIcon}) => {

  return (
    <LabelWrapper >
      {leftIcon || null}
      <input type={type} placeholder={placeholder} name={name} onChange={handleChange} />
      {rightIcon || null}
    </LabelWrapper>
  );
};
