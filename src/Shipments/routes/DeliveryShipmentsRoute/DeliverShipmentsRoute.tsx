import React, { useEffect } from "react";
import { useMachine } from "@xstate/react";

import DeliveryPartnerShipmentDetailsPage from "../../components/DeliveryPartnerShipmentDetailsPage";
import useDeliveryPartnerShipmentMachine from "../../hooks/useDeliveryPartnerShipmentsMachine";
import { ON_GET_SHIPMENT_DETAILS_EVENT } from "../../machines/DeliveryPartnerShipmentsMachine/constants";

export const DeliveryPartnerShipmentDetailsRoute = () => {
  const { deliveryPartnerShipmentsMachine } =
    useDeliveryPartnerShipmentMachine();
  const [
    deliveryPartnerShipmentsMachineState,
    deliveryPartnerShipmentsMachineSend,
  ]: any = useMachine(deliveryPartnerShipmentsMachine);

  useEffect(() => {
    deliveryPartnerShipmentsMachineSend(ON_GET_SHIPMENT_DETAILS_EVENT);
  }, []);

  return (
    <DeliveryPartnerShipmentDetailsPage
      deliveryPartnerShipmentsMachineState={
        deliveryPartnerShipmentsMachineState
      }
    />
  );
};
