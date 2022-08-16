import { MutableRefObject, useRef } from "react";

import { AuthenticationService } from "../../services/AuthServices/index";
import { AuthenticationFixtureService } from "../../services/AuthServices/index.fixture";

interface AuthenticationServiceType {
  authenticationService: AuthenticationService;
}

const useAuthenticationService = (): AuthenticationServiceType => {
  const authenticationServiceRef: MutableRefObject<AuthenticationService | null> =
    useRef(null);
  if (authenticationServiceRef.current === null) {
    authenticationServiceRef.current = new AuthenticationFixtureService();
  }
  return { authenticationService: authenticationServiceRef.current };
};

export default useAuthenticationService;
