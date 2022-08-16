import React from "react";
import { SetStateAction } from "react";

import {
  InputFieldContainer,
  LabelElement,
  InputElement,
  ErrorMsg,
} from "./styledComponents";

interface InputFieldWithLabelProps {
  type: string;
  labelText: string;
  id: string;
  value: string;
  onchangeMethod: (event: any) => void;
  placeholder: string;
  isErrorDisplayed: boolean;
  errMsg: string;
  onblurFunc: () => void;
  onFocusEvent: (callbackFunction: any) => void;
}

export const InputFieldWithLabel = (props: InputFieldWithLabelProps) => {
  const {
    type,
    labelText,
    id,
    value,
    onchangeMethod,
    placeholder,
    isErrorDisplayed,
    errMsg,
    onblurFunc,
    onFocusEvent,
  } = props;

  return (
    <InputFieldContainer>
      <LabelElement htmlFor={id}>{labelText}</LabelElement>
      <br />
      <InputElement
        type={type}
        value={value}
        id={id}
        onChange={onchangeMethod}
        placeholder={placeholder}
        onFocus={onFocusEvent}
        onBlur={onblurFunc}
      />
      <ErrorMsg>{isErrorDisplayed ? errMsg : null}</ErrorMsg>
    </InputFieldContainer>
  );
};
