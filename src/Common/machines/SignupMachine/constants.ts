export const INITIAL_STATE = "initialState";

export const SIGNUP_STATE = "SIGNUP_STATE";
export const SIGNUP_SUCCESS_STATE = "SIGNUP_SUCCESS_STATE";
export const SIGNUP_FAILURE_STATE = "SIGNUP_FAILURE_STATE";
export const ON_RETRY_EVENT = "onRetryEvent";

export const PAGE_LOADING = "PAGE_LOADING";
export const BUTTON_LOADING = "BUTTON_LOADING";
export const PAGE_FAILURE_VIEW = "PAGE_FAILURE_VIEW";

export const ON_SIGNUP_EVENT = "onSignup";

export const signupMachineStates = {
  initialState: INITIAL_STATE,
  signupState: SIGNUP_STATE,
  signupFailureState: SIGNUP_FAILURE_STATE,
  signUpSuccessState: SIGNUP_SUCCESS_STATE,
};

export const signUpMachineEvents = {
  onSignup: ON_SIGNUP_EVENT,
};

export const signUpMachineTags = {
  pageLoading: PAGE_LOADING,
  buttonLoading: BUTTON_LOADING,
  pageFailureView: PAGE_FAILURE_VIEW,
};
