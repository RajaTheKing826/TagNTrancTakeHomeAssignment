export const INITIAL_STATE = "initialState";

export const LOGIN_STATE = "LOGIN_STATE";
export const LOGIN_SUCCESS_STATE = "LOGIN_SUCCESS_STATE";
export const LOGIN_FAILURE_STATE = "LOGIN_FAILURE_STATE";

export const ON_RETRY_EVENT = "onRetryEvent";

export const PAGE_LOADING = "PAGE_LOADING";
export const BUTTON_LOADING = "BUTTON_LOADING";
export const PAGE_FAILURE_VIEW = "PAGE_FAILURE_VIEW";
export const SIGNIN_LOADING = "SIGNIN_LOADING";

export const ON_LOGIN_EVENT = "onLogin";

export const loginMachineStates = {
  initialState: INITIAL_STATE,
  loginState: LOGIN_STATE,
  loginSuccessState: LOGIN_STATE,
  loginFailureState: LOGIN_FAILURE_STATE,
};

export const loginMachineEvents = {
  onLogin: ON_LOGIN_EVENT,
};

export const loginMachineTags = {
  pageLoading: PAGE_LOADING,
  buttonLoading: BUTTON_LOADING,
  pageFailureView: PAGE_FAILURE_VIEW,
  signInLoading: SIGNIN_LOADING,
};
