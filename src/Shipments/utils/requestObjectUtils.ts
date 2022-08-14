import {
  CustomerShipmentAPIRepsonse,
  CustomerShipmentItem,
  GetCustomerShipmentsRequestObject,
} from "../services/types";

export const getFilteredShipmentsResponse = (
  requestObject: GetCustomerShipmentsRequestObject,
  shipments: Array<CustomerShipmentItem>
): CustomerShipmentAPIRepsonse => {
  let filteredShipments = shipments;
  const { expectedDeliveryDate, sourceLocation, destination } = requestObject;
  if (expectedDeliveryDate) {
    filteredShipments = filteredShipments.filter(
      (shipment) => shipment.expected_delivery_date === expectedDeliveryDate
    );
  }
  if (sourceLocation) {
    filteredShipments = filteredShipments.filter(
      (shipment) => shipment.source_location === sourceLocation
    );
  }
  if (destination) {
    filteredShipments = filteredShipments.filter(
      (shipment) => shipment.destination === destination
    );
  }
  return {
    shipments: filteredShipments,
  };
};
