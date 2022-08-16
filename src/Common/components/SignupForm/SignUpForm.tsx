import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";

import { TAG_N_TRAC_LOGO } from "../../constants/ImageUrlConstants";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/RegexConstants";

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
  LoaderContainer,
  SignUpHeadingText,
} from "./styledComponents";

interface LoginFormProps {
  onSubmitButtonClick: (values: unknown) => void;
  apiLoading: boolean;
}

const SignupForm = (props: LoginFormProps) => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isUsernameFocused, setIsUsernameFocused] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(true);
  const [isEmailFocused, setIsEmailFocused] = useState(true);

  const { onSubmitButtonClick, apiLoading } = props;

  const isValidPassword = PASSWORD_REGEX.test(password);
  const isValidEmail = EMAIL_REGEX.test(email);
  const onUsernameFocusEvent = () => {
    setIsUsernameFocused(true);
  };

  const onPasswordFocusEvent = () => {
    setIsPasswordFocused(true);
  };

  const onEmailFocusEvent = () => {
    setIsEmailFocused(true);
  };

  const onBlurUsername = () => {
    setIsUsernameFocused(false);
  };

  const onBlurPassword = () => {
    setIsPasswordFocused(false);
  };

  const onBlurEmail = () => {
    setIsEmailFocused(false);
  };

  const onLoginButtonClick = (e) => {
    e.preventDefault();
    setIsUsernameFocused(false);
    setIsPasswordFocused(false);
    setIsEmailFocused(false);

    if (userName !== "" && isValidPassword && isValidEmail) {
      onSubmitButtonClick({ userName, password });
    }
  };

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const renderLoader = () => {
    return (
      <LoaderContainer>
        <Oval
          height="20"
          width="20"
          color="white"
          ariaLabel="three-dots-loading"
        />
      </LoaderContainer>
    );
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

  const passwordFieldValues = {
    type: "password",
    labelText: "PASSWORD*",
    id: "password",
    value: password,
    onchangeMethod: onChangePassword,
    placeholder: "Enter Password",
    isErrorDisplayed: !isPasswordFocused && !PASSWORD_REGEX.test(password),
    errMsg: "Password should container string, number, and special characters",
    onblurFunc: onBlurPassword,
    onFocusEvent: onPasswordFocusEvent,
  };

  const emailFieldValues = {
    type: "text",
    labelText: "Enter Email*",
    id: "email",
    value: email,
    onchangeMethod: onChangeEmail,
    placeholder: "Enter Email",
    isErrorDisplayed: !isEmailFocused && !EMAIL_REGEX.test(email),
    errMsg: "Enter Valid Email",
    onblurFunc: onBlurEmail,
    onFocusEvent: onEmailFocusEvent,
  };

  return (
    <LoginPageContainer>
      <InstaImageContainer>
        <RenderInstaImage src={TAG_N_TRAC_LOGO} />
      </InstaImageContainer>

      <LoginFormContainer>
        <SignUpHeadingText>SignUp</SignUpHeadingText>
        <InstaLogoContainer>
          <RenderInstaLogo src={TAG_N_TRAC_LOGO} />
        </InstaLogoContainer>
        <InputFieldWithLabel {...userNameFieldValues} />
        <InputFieldWithLabel {...passwordFieldValues} />
        <InputFieldWithLabel {...emailFieldValues} />
        <ButtonErrorMsgContainer>
          <LoginButton onClick={onLoginButtonClick}>
            {apiLoading ? renderLoader() : "Signup"}
          </LoginButton>
        </ButtonErrorMsgContainer>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export { SignupForm };
