import { LabelWrapper } from "./InputStyles";
import React from "react";
import { InputProps } from "../../interfaces/types";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  handleChange,
  leftIcon,
  rightIcon,
  testId,
}) => {
  return (
    <LabelWrapper data-testid={testId}>
      {leftIcon || null}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {rightIcon || null}
    </LabelWrapper>
  );
};
