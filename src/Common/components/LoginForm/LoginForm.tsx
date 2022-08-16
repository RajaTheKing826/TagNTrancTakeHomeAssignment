import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";
import { isRegularExpressionLiteral } from "typescript";

import { TAG_N_TRAC_LOGO } from "../../constants/ImageUrlConstants";
import { ON_LOGIN_EVENT } from "../../machines/LoginMachine/constants";
import { LoginMachineState } from "../../machines/LoginMachine/LoginMachine";
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
} from "./styledComponents";

interface LoginFormProps {
  onSubmitButtonClick: (values: unknown) => void;
  apiLoading: boolean;
}

const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameFocused, setIsUsernameFocused] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(true);
  const { onSubmitButtonClick, apiLoading } = props;

  const passwordRegex = new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );

  const isValidPassword = passwordRegex.test(password);
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

    if (userName !== "" && isValidPassword) {
      onSubmitButtonClick({ userName, password });
    }
  };

  const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
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
    isErrorDisplayed: !isPasswordFocused && !passwordRegex.test(password),
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
          <LoginButton onClick={onLoginButtonClick}>
            {apiLoading ? renderLoader() : "Login"}
          </LoginButton>
        </ButtonErrorMsgContainer>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export { LoginForm };
