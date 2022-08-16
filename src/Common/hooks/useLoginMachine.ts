import { useMachine } from "@xstate/react";
import React from "react";
import { assign } from "xstate";

import { loginMachine } from "../machines/LoginMachine/LoginMachine";
import useLoginApi from "./useLoginApi";

const useLoginMachine = () => {
  const { loginApi } = useLoginApi();
  const loginMachineWithConfig = loginMachine().withConfig({
    actions: {
      assignErrorMessageToContext: assign((context, event: any) => ({
        errorMessage: event.data.message,
      })),
      redirectToShipmentsRoute: (context: any, event: any) => {
        console.log(event, "event");
      },
    },
    services: {
      loginUser: (context, event: any) => {
        return loginApi(event.data ? event.data : {});
      },
    },
    guards: {},
  });

  const [loginFormMachineState, loginFormMachineSend]: any = useMachine(
    loginMachineWithConfig
  );
  return {
    loginFormMachineState,
    loginFormMachineSend,
  };
};

export default useLoginMachine;
