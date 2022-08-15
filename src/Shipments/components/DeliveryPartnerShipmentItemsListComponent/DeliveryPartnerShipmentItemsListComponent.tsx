import React from "react";

import { DeliveryPartnerShipmentsMachineState } from "../../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import DeliveryPartnerShipmentItemCard from "../DeliveryPartnerShipmentItemCard";

import { ListViewContainer } from "./styledComponents";

interface DeliveryPartnerShipmentItemsListComponentProps {
  deliveryPartnerShipmentsMachineState: DeliveryPartnerShipmentsMachineState;
}

export const DeliveryPartnerShipmentItemsListComponent = (
  props: DeliveryPartnerShipmentItemsListComponentProps
) => {
  const { deliveryPartnerShipmentsMachineState } = props;
  const { shipments } = deliveryPartnerShipmentsMachineState.context;

  return (
    <ListViewContainer>
      {shipments.map((shipment) => (
        <DeliveryPartnerShipmentItemCard
          size={shipment.size}
          sourceLocation={shipment.sourceLocation}
          destinationLocation={shipment.destination}
          title={shipment.title}
          imageSource={shipment.image}
        />
      ))}
    </ListViewContainer>
  );
};
