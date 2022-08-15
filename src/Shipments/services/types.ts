export interface CustomerShipmentItem {
  image: string;
  size: string;
  expected_delivery_date: string;
  source_location: string;
  destination: string;
  title: string;
  id: string;
}

export interface CustomerShipmentAPIRepsonse {
  shipments: Array<CustomerShipmentItem>;
}

export interface GetCustomerShipmentsRequestObject {
  size?: string;
  expectedDeliveryDate?: string;
  sourceLocation?: string;
  destination?: string;
}
