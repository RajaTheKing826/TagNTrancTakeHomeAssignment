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
  updateStatusState,
  updateStatusSuccessState,
} = deliveryPartnerShipmentMachineStates;

const { onGetShipmentDetailsEvent, onRetryEvent, onUpdateStatus } =
  deliveryPartnerShipmentMachineEvents;

const { pageLoading, updateStatusLoading } = deliveryPartnerShipmentMachineTags;

export interface DeliveryPartnerShipmentMachineContext {
  shipments: Array<DeliveryPartnerShipmentDataModel>;
  errorMessage: string;
  statusUpdatingShipmentId: string;
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
      statusUpdatingShipmentId: "",
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
          [onUpdateStatus]: {
            target: updateStatusState,
            actions: ["addUpdateShipmentItemId"],
          },
        },
      },
      [updateStatusState]: {
        tags: [updateStatusLoading],
        invoke: {
          src: "updateDeliveryStatus",
          onDone: {
            target: updateStatusSuccessState,
            actions: ["showSuccessToast"],
          },
          onError: {
            target: getShipmentDetailsSuccessState,
            actions: ["showFailureToast"],
          },
        },
      },
      [updateStatusSuccessState]: {
        on: {
          [onGetShipmentDetailsEvent]: getShipmentDetailsState,
          [onUpdateStatus]: {
            target: updateStatusState,
            actions: ["addUpdateShipmentItemId"],
          },
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
