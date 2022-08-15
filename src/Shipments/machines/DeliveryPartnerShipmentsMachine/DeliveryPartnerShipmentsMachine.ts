import React from "react";
import { createMachine, InterpreterFrom, Prop, StateFrom } from "xstate";
import DeliveryPartnerShipmentDataModel from "../../stores/models/DeliveryPartnerShipmentDataModel";

import {
  deliveryPartnerShipmentMachineEvents,
  deliveryPartnerShipmentMachineStates,
  deliveryPartnerShipmentMachineTags,
} from "./constants";

const {
  initialState,
  getShipmentDetailsState,
  getShipmentDetailsFailureState,
  getShipmentDetailsSuccessState,
} = deliveryPartnerShipmentMachineStates;

const { onGetShipmentDetailsEvent, onRetryEvent, onSortOrFilterShipments } =
  deliveryPartnerShipmentMachineEvents;

const { pageLoading } = deliveryPartnerShipmentMachineTags;

export interface DeliveryPartnerShipmentMachineContext {
  shipments: Array<DeliveryPartnerShipmentDataModel>;
  errorMessage: string;
}

export type DeliveryPartnerShipmentsMachineEvents =
  | { type: "ON_GET_SHIPMENT_DETAILS_EVENT"; data: any }
  | { type: "ON_GET_DELIVERY_PARTNERS_EVENT" }
  | { type: "ON_RETRY_EVENT" }
  | { type: "ON_SORT_OR_FILTER_SHIPMENT"; data: any };

export const deliveryParnterShipmentsMachine = () => {
  return createMachine<
    DeliveryPartnerShipmentMachineContext,
    DeliveryPartnerShipmentsMachineEvents
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
          src: "getDeliveryPartnerShipmentDetails",
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
        on: {
          [onGetShipmentDetailsEvent]: getShipmentDetailsState,
        },
      },
      [getShipmentDetailsFailureState]: {
        on: {
          [onRetryEvent]: getShipmentDetailsState,
        },
      },
    },
  });
};

export type DeliveryPartnerShipmentsMachine = ReturnType<
  typeof deliveryParnterShipmentsMachine
>;

export type DeliveryPartnerShipmentsMachineState =
  StateFrom<DeliveryPartnerShipmentsMachine>;

export type DeliveryPartnerShipmentsMachineSend = Prop<
  InterpreterFrom<DeliveryPartnerShipmentsMachine>,
  "send"
>;
