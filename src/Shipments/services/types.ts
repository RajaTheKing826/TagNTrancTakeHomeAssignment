export interface CustomerShipmentItem {
  image: string;
  size: string;
  expected_delivery_date: string;
  source_location: string;
  destination: string;
  title: string;
  id: string;
}

export interface DeliveryPartnerShipmentItem extends CustomerShipmentItem {
  delivery_status: string;
}

export interface CustomerShipmentAPIRepsonse {
  shipments: Array<CustomerShipmentItem>;
}

export interface DeliveryPartnerShipmentsAPIResponse {
  shipments: Array<DeliveryPartnerShipmentItem>;
}

export interface GetCustomerShipmentsRequestObject {
  size?: string;
  expectedDeliveryDate?: string;
  sourceLocation?: string;
  destination?: string;
}

export interface GetDeliveryPartnerShipmentsRequestObject {
  filter?: string;
  sort?: string;
}

export interface UpdateShipmentDeliveryStatus {
  id: string;
  status: string;
}