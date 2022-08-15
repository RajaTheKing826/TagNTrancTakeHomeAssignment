import React from "react";
import { assign } from "xstate";

import { customerShipmentsMachine } from "../machines/CustomerShipmentsMachine/CustomerShipmentsMachine";
import { CustomerShipmentItem } from "../services/types";
import CustomerShipmentDataModel from "../stores/models/CustomerShipmentDataModel";
import useGetCustomerShipmentDetails from "./useGetCustomerShipmentDetails";

const useCustomerShipmentsMachine = () => {
  const { getCustomerDetailsApi } = useGetCustomerShipmentDetails();

  const customerShipmentsMachineWithConfig =
    customerShipmentsMachine().withConfig({
      actions: {
        assignErrorMessageToContext: assign((context, event: any) => ({
          errorMessage: event.data.message,
        })),
        assignDataToContext: (context, event: any) => {
          context.shipments = event.data.shipments.map(
            (shipmentItem: CustomerShipmentItem) =>
              new CustomerShipmentDataModel(shipmentItem)
          );
        },
      },
      services: {
        getCustomerShipmentDetails: () => getCustomerDetailsApi({}),
      },
      guards: {},
    });

  return { customerShipmentsMachine: customerShipmentsMachineWithConfig };
};

export default useCustomerShipmentsMachine;
