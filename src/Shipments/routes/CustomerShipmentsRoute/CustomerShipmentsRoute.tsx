import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";
import Cookies from "js-cookie";

import CustomerShipmentPage from "../../components/CustomerShipmentPage";
import useCustomerShipmentsMachine from "../../hooks/useCustomerShipmentsMachine";
import { ON_GET_SHIPMENT_DETAILS_EVENT } from "../../machines/CustomerShipmentsMachine/constants";
import { LOGIN_COOKIE } from "../../../Common/constants/CookiConstants";

export const CustomerShipmentsRoute = () => {
  const { customerShipmentsMachine } = useCustomerShipmentsMachine();
  const [customerShipmentsMachineState, customerShipmentsMachineSend]: any =
    useMachine(customerShipmentsMachine);

  useEffect(() => {
    customerShipmentsMachineSend(ON_GET_SHIPMENT_DETAILS_EVENT);
    if (!Cookies.get(LOGIN_COOKIE)) {
      window.location.href = "http://localhost:3000/login";
    }
  }, []);

  return (
    <CustomerShipmentPage
      customerShipmentsMachineState={customerShipmentsMachineState}
    />
  );
};
