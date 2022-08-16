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
    return resolveWithTimeout(loginFixtureResponse);
  };
}
