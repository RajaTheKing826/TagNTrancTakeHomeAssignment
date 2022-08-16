import { useMutation } from "react-query";
import { LoginRequestObject } from "../services/types";
import useAuthenticationService from "./services/useAuthService";

const useLoginApi = (): {
  loginApi: any;
  error: any;
  data: any;
} => {
  const { authenticationService } = useAuthenticationService();

  const loginApiFunction = (params: LoginRequestObject) => {
    return authenticationService.login(params);
  };

  const { mutateAsync, error, status, data, isLoading } =
    useMutation(loginApiFunction);

  return {
    loginApi: mutateAsync,
    error: error,
    data: data,
  };
};

export default useLoginApi;
