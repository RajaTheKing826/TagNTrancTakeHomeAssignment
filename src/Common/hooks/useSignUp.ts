import { useMutation } from "react-query";
import { SignupRequestObject } from "../services/types";
import useAuthenticationService from "./services/useAuthService";

const useLoginApi = (): {
  signupApi: any;
  error: unknown;
  status: string;
} => {
  const { authenticationService } = useAuthenticationService();

  const signUpApiFunction = (params: SignupRequestObject) => {
    return authenticationService.signup(params);
  };

  const { mutateAsync, error, status } = useMutation(signUpApiFunction);

  return {
    signupApi: mutateAsync,
    error,
    status,
  };
};

export default useLoginApi;
