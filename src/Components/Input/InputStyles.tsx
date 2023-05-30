import styled from "styled-components";
import { InputProps } from "../../interfaces/types";

export const LabelWrapper = styled.label.attrs({
  className: "label-wrapper",
})`
  height: 32px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 8px;

  & input {
    outline: none;
    border: none;
    flex: 1;
  }
`;
