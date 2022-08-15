import React from "react";

import { DeliveryPartnerShipmentsMachineState } from "../../machines/DeliveryPartnerShipmentsMachine/DeliveryPartnerShipmentsMachine";
import DeliveryPartnerShipmentItemCard from "../DeliveryPartnerShipmentItemCard";

import { ListViewContainer } from "./styledComponents";

interface DeliveryPartnerShipmentItemsListComponentProps {
  deliveryPartnerShipmentsMachineState: DeliveryPartnerShipmentsMachineState;
  deliveryPartnerShipmentsMachineSend: any;
}

export const DeliveryPartnerShipmentItemsListComponent = (
  props: DeliveryPartnerShipmentItemsListComponentProps
) => {
  const {
    deliveryPartnerShipmentsMachineState,
    deliveryPartnerShipmentsMachineSend,
  } = props;
  const { shipments } = deliveryPartnerShipmentsMachineState.context;

  return (
    <ListViewContainer>
      {shipments.map((shipment) => (
        <DeliveryPartnerShipmentItemCard
          key={shipment.id}
          id={shipment.id}
          size={shipment.size}
          sourceLocation={shipment.sourceLocation}
          destinationLocation={shipment.destination}
          title={shipment.title}
          imageSource={shipment.image}
          deliveryDate={shipment.expectedDeliveryDate}
          deliveryStatus={shipment.deliveryStatus}
          deliveryPartnerShipmentsMachineSend={
            deliveryPartnerShipmentsMachineSend
          }
          deliveryPartnerShipmentsMachineState={
            deliveryPartnerShipmentsMachineState
          }
        />
      ))}
    </ListViewContainer>
  );
};
