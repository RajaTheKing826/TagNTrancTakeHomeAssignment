import React from "react";

import customerShipmentFixtures from "../../fixtures/customer-shipment-fixtures.json";
import CustomerShipmentItemCard from "../CustomerShipmentItemCard";

import { ListViewContainer } from "./styledComponents";

export const CustomerShipmentItemsListComponent = () => {
  return (
    <ListViewContainer>
      {customerShipmentFixtures.map((shipment) => (
        <CustomerShipmentItemCard
          size={shipment.size}
          sourceLocation={shipment.source_location}
          destinationLocation={shipment.destination}
          title={shipment.title}
          imageSource={shipment.image}
        />
      ))}
    </ListViewContainer>
  );
};
