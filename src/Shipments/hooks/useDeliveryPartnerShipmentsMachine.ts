import React from "react";
import { assign } from "xstate";

import { deliveryParnterShipmentsMachine } from "../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import { DeliveryPartnerShipmentItem } from "../services/types";
import DeliveryParnterShipmentDataModel from "../stores/models/DeliveryPartnerShipmentDataModel";
import useGetDeliveryPartnerShipmentDetails from "./useGetDeliveryPartnerShipmentDetails";

const useDeliveryPartnerShipmentsMachine = () => {
  const { getDeliveryPartnerShipmentDetailsApi } =
    useGetDeliveryPartnerShipmentDetails();

  const deliveryParnterShipmentsMachineWithConfig =
    deliveryParnterShipmentsMachine().withConfig({
      actions: {
        assignErrorMessageToContext: assign((context, event: any) => ({
          errorMessage: event.data.message,
        })),
        assignDataToContext: (context, event: any) => {
          context.shipments = event.data.shipments.map(
            (shipmentItem: DeliveryPartnerShipmentItem) =>
              new DeliveryParnterShipmentDataModel(shipmentItem)
          );
        },
      },
      services: {
        getDeliveryPartnerShipmentDetails: (context, event: any) =>
          getDeliveryPartnerShipmentDetailsApi(event.data ? event.data : {}),
      },
      guards: {},
    });

  return {
    deliveryPartnerShipmentsMachine: deliveryParnterShipmentsMachineWithConfig,
  };
};

export default useDeliveryPartnerShipmentsMachine;
