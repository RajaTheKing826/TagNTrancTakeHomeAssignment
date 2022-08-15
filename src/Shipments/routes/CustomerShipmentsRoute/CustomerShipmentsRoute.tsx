import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";

import CustomerShipmentPage from "../../components/CustomerShipmentPage";
import useCustomerShipmentsMachine from "../../hooks/useCustomerShipmentsMachine";
import {
  ON_GET_SHIPMENT_DETAILS_EVENT,
  PAGE_LOADING,
} from "../../machines/CustomerShipmentsMachine/constants";

export const CustomerShipmentsRoute = () => {
  const { customerShipmentsMachine } = useCustomerShipmentsMachine();
  const [customerShipmentsMachineState, customerShipmentsMachineSend]: any =
    useMachine(customerShipmentsMachine);

  useEffect(() => {
    customerShipmentsMachineSend(ON_GET_SHIPMENT_DETAILS_EVENT);
  }, []);

  return (
    <CustomerShipmentPage
      customerShipmentsMachineState={customerShipmentsMachineState}
    />
  );
};
