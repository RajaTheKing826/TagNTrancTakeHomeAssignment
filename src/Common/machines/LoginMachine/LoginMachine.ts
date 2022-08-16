import React from "react";
import { createMachine, InterpreterFrom, Prop, StateFrom } from "xstate";

import {
  loginMachineEvents,
  loginMachineStates,
  loginMachineTags,
} from "./constants";

const { initialState, loginState, loginSuccessState, loginFailureState } =
  loginMachineStates;

const { onLogin } = loginMachineEvents;

const { signInLoading } = loginMachineTags;

export interface LoginMachineContext {
  errorMessage: string;
}

export type LoginMachineEvents =
  | { type: "onLogin"; data: any }
  | { type: "ON_RETRY_EVENT" };

export const loginMachine = () => {
  return createMachine<LoginMachineContext, LoginMachineEvents>({
    initial: initialState,
    context: {
      errorMessage: "",
    },
    states: {
      [initialState]: {
        on: {
          [onLogin]: loginState,
        },
      },
      [loginState]: {
        invoke: {
          src: "loginUser",
          onDone: {
            target: loginSuccessState,
            actions: ["redirectToShipmentsRoute"],
          },
          onError: {
            actions: ["assignErrorMessageToContext"],
            target: loginFailureState,
          },
        },
      },
      [loginFailureState]: {
        on: {
          [onLogin]: loginState,
        },
      },
      [loginSuccessState]: {
        type: "final",
      },
    },
  });
};

export type LoginMachine = ReturnType<typeof loginMachine>;

export type LoginMachineState = StateFrom<LoginMachine>;

export type LoginMachineSend = Prop<InterpreterFrom<LoginMachine>, "send">;
