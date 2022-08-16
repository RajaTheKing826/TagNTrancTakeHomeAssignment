import { useMachine } from "@xstate/react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import SignupForm from "../../components/SignupForm";
import useSignupApi from "../../hooks/useSignUp";
import { LOGIN_COOKIE } from "../../constants/CookiConstants";

export const SignUpRoute = (props) => {
  const [apiLoading, setApiLoading] = useState(false);

  const { signupApi } = useSignupApi();

  useEffect(() => {
    const cookieValue = Cookies.get(LOGIN_COOKIE);
    if (cookieValue) {
      if (cookieValue.includes("customer")) {
        window.location.href = "http://localhost:3000/customer-shipments";
      } else {
        window.location.href =
          "http://localhost:3000/delivery-partner-shipments";
      }
    }
  }, []);

  const onSubmitButtonClick = (values) => {
    setApiLoading(true);
    signupApi(values).then((data) => {
      setApiLoading(false);
      Cookies.set(LOGIN_COOKIE, data.access_token);
      if (data.access_token.includes("customer")) {
        window.location.href = "http://localhost:3000/customer-shipments";
      } else {
        window.location.href =
          "http://localhost:3000/delivery-partner-shipments";
      }
    });
  };

  return (
    <SignupForm
      apiLoading={apiLoading}
      onSubmitButtonClick={onSubmitButtonClick}
    />
  );
};
