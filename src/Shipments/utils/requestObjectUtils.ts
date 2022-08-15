import {
  CustomerShipmentAPIRepsonse,
  CustomerShipmentItem,
  DeliveryPartnerShipmentItem,
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
} from "../services/types";

export const getCustomerFilteredShipmentsResponse = (
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

function descendingSortFunction(
  firstObject: DeliveryPartnerShipmentItem,
  secondObject: DeliveryPartnerShipmentItem
) {
  if (
    firstObject.expected_delivery_date < secondObject.expected_delivery_date
  ) {
    return -1;
  }
  if (
    firstObject.expected_delivery_date > secondObject.expected_delivery_date
  ) {
    return 1;
  }
  return 0;
}

function ascendingSortFunction(
  firstObject: DeliveryPartnerShipmentItem,
  secondObject: DeliveryPartnerShipmentItem
) {
  if (
    firstObject.expected_delivery_date > secondObject.expected_delivery_date
  ) {
    return -1;
  }
  if (
    firstObject.expected_delivery_date < secondObject.expected_delivery_date
  ) {
    return 1;
  }
  return 0;
}

export const getFilteredAndSortedDeliveryPartnerShipments = (
  requestObject: GetDeliveryPartnerShipmentsRequestObject,
  shipments: Array<DeliveryPartnerShipmentItem>
) => {
  const { filter, sort } = requestObject;
  let filteredItems = shipments;

  if (sort && sort !== "") {
    if (sort === "LOW_TO_HIGH") {
      filteredItems.sort(descendingSortFunction);
    } else {
      filteredItems.sort(ascendingSortFunction);
    }
  }
  if (filter && filter !== "") {
    filteredItems = filteredItems.filter(
      (item) => item.delivery_status === filter
    );
  }
  return { shipments: filteredItems };
};
