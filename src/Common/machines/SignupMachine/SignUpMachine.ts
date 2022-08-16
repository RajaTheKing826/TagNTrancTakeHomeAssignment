import React from "react";
import { createMachine, InterpreterFrom, Prop, StateFrom } from "xstate";

import {
  signUpMachineEvents,
  signupMachineStates,
  signUpMachineTags,
} from "./constants";

const { initialState, signupState, signUpSuccessState, signupFailureState } =
  signupMachineStates;

const { onSignup } = signUpMachineEvents;

const { pageLoading } = signUpMachineTags;

export interface SignUpMachineContext {
  errorMessage: string;
}

export type SignupMachineEvents =
  | { type: "onSignup"; data: any }
  | { type: "ON_RETRY_EVENT" };

export const signupMachine = () => {
  return createMachine<SignUpMachineContext, SignupMachineEvents>({
    initial: initialState,
    context: {
      errorMessage: "",
    },
    states: {
      [initialState]: {
        on: {
          [onSignup]: signupState,
        },
      },
      [signupState]: {
        tags: [pageLoading],
        invoke: {
          src: "signupUser",
          onDone: {
            actions: ["assignDataToContext"],
            target: signUpSuccessState,
          },
          onError: {
            actions: ["assignErrorMessageToContext"],
            target: signupFailureState,
          },
        },
      },
      [signUpSuccessState]: {
        type: "final",
      },
      [signupFailureState]: {
        on: {
          [onSignup]: signupState,
        },
      },
    },
  });
};

export type SignUpMachine = ReturnType<typeof signupMachine>;

export type SignUpMachineState = StateFrom<SignUpMachine>;

export type SignUpMachineSend = Prop<InterpreterFrom<SignUpMachine>, "send">;
