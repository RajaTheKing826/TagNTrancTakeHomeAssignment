import React from "react";

import customerShipmentFixtures from "../../fixtures/customer-shipment-fixtures.json";
import { CustomerShipmentsMachineState } from "../../machines/CustomerShipmentsMachine/CustomerShipmentsMachine";
import CustomerShipmentItemCard from "../CustomerShipmentItemCard";

import { ListViewContainer } from "./styledComponents";

interface CustomerShipmentItemsListComponentProps {
  customerShipmentsMachineState: CustomerShipmentsMachineState;
}

export const CustomerShipmentItemsListComponent = (
  props: CustomerShipmentItemsListComponentProps
) => {
  const { customerShipmentsMachineState } = props;
  const { shipments } = customerShipmentsMachineState.context;

  return (
    <ListViewContainer>
      {shipments.map((shipment) => (
        <CustomerShipmentItemCard
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
