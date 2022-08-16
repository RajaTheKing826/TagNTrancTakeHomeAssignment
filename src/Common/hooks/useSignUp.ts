import { useMutation } from "react-query";
import { SignupRequestObject } from "../services/types";
import useAuthenticationService from "./services/useAuthService";

const useLoginApi = (): {
  loginApi: any;
  error: unknown;
  status: string;
} => {
  const { authenticationService } = useAuthenticationService();

  const updateDeliverStatus = (params: SignupRequestObject) => {
    console.log(params, "params");
    return authenticationService.signup(params);
  };

  const { mutateAsync, error, status } = useMutation(updateDeliverStatus);

  return {
    loginApi: mutateAsync,
    error,
    status,
  };
};

export default useLoginApi;
