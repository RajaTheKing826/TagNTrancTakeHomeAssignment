import React from "react";
import { createMachine, InterpreterFrom, Prop, StateFrom } from "xstate";
import { CustomerShipmentItem } from "../../services/types";
import CustomerShipmentDataModel from "../../stores/models/CustomerShipmentDataModel";

import {
  customerShipmentMachineEvents,
  customerShipmentMachineStates,
  customerShipmentMachineTags,
} from "./constants";

const {
  initialState,
  getShipmentDetailsState,
  getShipmentDetailsFailureState,
  getShipmentDetailsSuccessState,
} = customerShipmentMachineStates;

const { onGetShipmentDetailsEvent, onRetryEvent } =
  customerShipmentMachineEvents;

const { pageLoading } = customerShipmentMachineTags;

export interface CustomerShipmentMachineContext {
  shipments: Array<CustomerShipmentDataModel>;
  errorMessage: string;
}

export type CustomerShipmentMachineEvents =
  | { type: "ON_GET_SHIPMENT_DETAILS_EVENT"; data: any }
  | { type: "ON_GET_DELIVERY_PARTNERS_EVENT" }
  | { type: "ON_RETRY_EVENT" };

export const customerShipmentsMachine = () => {
  return createMachine<
    CustomerShipmentMachineContext,
    CustomerShipmentMachineEvents
  >({
    initial: initialState,
    context: {
      errorMessage: "",
      shipments: [],
    },
    states: {
      [initialState]: {
        on: {
          [onGetShipmentDetailsEvent]: getShipmentDetailsState,
        },
      },
      [getShipmentDetailsState]: {
        tags: [pageLoading],
        invoke: {
          src: "getCustomerShipmentDetails",
          onDone: {
            actions: ["assignDataToContext"],
            target: getShipmentDetailsSuccessState,
          },
          onError: {
            actions: ["assignErrorMessageToContext"],
            target: getShipmentDetailsFailureState,
          },
        },
      },
      [getShipmentDetailsSuccessState]: {
        type: "final",
      },
      [getShipmentDetailsFailureState]: {
        on: {
          [onRetryEvent]: getShipmentDetailsState,
        },
      },
    },
  });
};

export type CustomerShipmentsMachine = ReturnType<
  typeof customerShipmentsMachine
>;

export type CustomerShipmentsMachineState = StateFrom<CustomerShipmentsMachine>;

export type CustomerShipmentsMachineSend = Prop<
  InterpreterFrom<CustomerShipmentsMachine>,
  "send"
>;
