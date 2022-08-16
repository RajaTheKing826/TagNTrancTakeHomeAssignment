import { useMachine } from "@xstate/react";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import LoginForm from "../../components/LoginForm";
import useLoginApi from "../../hooks/useLoginApi";
import { LOGIN_COOKIE } from "../../constants/CookiConstants";

export const LoginRoute = (props) => {
  const [apiLoading, setApiLoading] = useState(false);

  const { loginApi } = useLoginApi();

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
    loginApi(values).then((data) => {
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
    <LoginForm
      apiLoading={apiLoading}
      onSubmitButtonClick={onSubmitButtonClick}
    />
  );
};
