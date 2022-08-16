import React from "react";
import { SignupRequestObject, LoginRequestObject } from "../types";

export interface AuthenticationService {
  login: (requestObject: LoginRequestObject) => Promise<any>;
  signup: (requestObject: SignupRequestObject) => Promise<any>;
}
