import React from "react";
import { CustomerShipmentItem } from "../../../services/types";
class DeliveryPartnerShipmentDataModel {
  image: string;
  size: string;
  expectedDeliveryDate: string;
  sourceLocation: string;
  destination: string;
  id: string;
  title: string;
  constructor(customerShipmentItem: CustomerShipmentItem) {
    this.id = customerShipmentItem.id;
    this.destination = customerShipmentItem.destination;
    this.expectedDeliveryDate = customerShipmentItem.expected_delivery_date;
    this.sourceLocation = customerShipmentItem.source_location;
    this.size = customerShipmentItem.size;
    this.image = customerShipmentItem.image;
    this.title = customerShipmentItem.title;
  }
}

export default DeliveryPartnerShipmentDataModel;
