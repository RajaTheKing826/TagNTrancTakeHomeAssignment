import React from "react";
import { resolveWithTimeout } from "../../../Common/utils/promiseUtils";

import loginFixtureResponse from "../../fixtures/loginResponse.json";
import { LoginRequestObject, SignupRequestObject } from "../types";
import { AuthenticationService } from ".";

export class AuthenticationFixtureService implements AuthenticationService {
  login = (requestObject: LoginRequestObject) => {
    return resolveWithTimeout(loginFixtureResponse);
  };

  signup = (requestObject: SignupRequestObject) => {
    const accessToken = requestObject.username.includes("customer")
      ? "customer-343e23432fwe-3432fwef129393"
      : "delivery-partner-123wer123-2323f-2334";
    return resolveWithTimeout({ access_token: accessToken });
  };
}
