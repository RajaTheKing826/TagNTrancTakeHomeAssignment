import React from "react";
import Config from "../../../Common/constants/EnvironmentConstants";
import { LoginRequestObject, SignupRequestObject } from "../types";
import { endpoints } from "../endpoints";

import { AuthenticationService } from "./index";

class AuthenticationAPIServices implements AuthenticationService {
  apiUrl: string;
  constructor() {
    this.apiUrl = Config.SHIPMENTS_API;
  }
  login = (requestObject: LoginRequestObject) => {
    const { login } = endpoints;
    return fetch(this.apiUrl + login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObject),
    }).then((data) => data);
  };

  signup = (requestObject: SignupRequestObject) => {
    const { signup } = endpoints;

    return fetch(this.apiUrl + signup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObject),
    }).then((data) => data);
  };
}

export default AuthenticationAPIServices;
