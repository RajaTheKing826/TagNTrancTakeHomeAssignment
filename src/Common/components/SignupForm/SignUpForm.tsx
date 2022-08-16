import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isRegularExpressionLiteral } from "typescript";

import { TAG_N_TRAC_LOGO } from "../../constants/ImageUrlConstants";
import InputFieldWithLabel from "../InputFieldWithLabel";

import {
  LoginPageContainer,
  InstaImageContainer,
  RenderInstaImage,
  LoginFormContainer,
  InstaLogoContainer,
  RenderInstaLogo,
  LoginButton,
  ButtonErrorMsgContainer,
  ErrorMsg,
} from "./styledComponents";

const SignUpForm = () => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameFocused, setIsUsernameFocused] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(true);

  const regex = new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );
  const onUsernameFocusEvent = () => {
    setIsUsernameFocused(true);
  };

  const onPasswordFocusEvent = () => {
    setIsPasswordFocused(true);
  };

  const onBlurUsername = () => {
    setIsUsernameFocused(false);
  };

  const onBlurPassword = () => {
    setIsPasswordFocused(false);
  };

  const onLoginButtonClick = (e) => {
    e.preventDefault();
    setIsUsernameFocused(false);
    setIsPasswordFocused(false);
  };

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const userNameFieldValues = {
    type: "text",
    labelText: "USERNAME*",
    id: "username",
    value: userName,
    onchangeMethod: onChangeUsername,
    placeholder: "Enter Username",
    isErrorDisplayed: !isUsernameFocused,
    errMsg: userName === "" ? "Username Required" : "",
    onblurFunc: onBlurUsername,
    onFocusEvent: onUsernameFocusEvent,
  };

  console.log(regex.test(password), "regex.test(password)");

  const passwordFieldValues = {
    type: "password",
    labelText: "PASSWORD*",
    id: "password",
    value: password,
    onchangeMethod: onChangePassword,
    placeholder: "Enter Password",
    isErrorDisplayed: !isPasswordFocused && !regex.test(password),
    errMsg: "Password should container string, number, and special characters",
    onblurFunc: onBlurPassword,
    onFocusEvent: onPasswordFocusEvent,
  };

  return (
    <LoginPageContainer>
      <InstaImageContainer>
        <RenderInstaImage src={TAG_N_TRAC_LOGO} />
      </InstaImageContainer>

      <LoginFormContainer>
        <InstaLogoContainer>
          <RenderInstaLogo src={TAG_N_TRAC_LOGO} />
        </InstaLogoContainer>
        <InputFieldWithLabel {...userNameFieldValues} />
        <InputFieldWithLabel {...passwordFieldValues} />
        <ButtonErrorMsgContainer>
          <LoginButton onClick={onLoginButtonClick}>Login</LoginButton>
        </ButtonErrorMsgContainer>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export { SignUpForm };
