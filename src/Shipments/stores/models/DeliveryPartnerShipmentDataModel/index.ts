import React from "react";
import { DeliveryPartnerShipmentItem } from "../../../services/types";
class DeliveryParnterShipmentDataModel {
  image: string;
  size: string;
  expectedDeliveryDate: string;
  sourceLocation: string;
  destination: string;
  id: string;
  title: string;
  deliveryStatus: string;
  constructor(deliveryPartnerShipmentItem: DeliveryPartnerShipmentItem) {
    this.id = deliveryPartnerShipmentItem.id;
    this.destination = deliveryPartnerShipmentItem.destination;
    this.expectedDeliveryDate =
      deliveryPartnerShipmentItem.expected_delivery_date;
    this.sourceLocation = deliveryPartnerShipmentItem.source_location;
    this.size = deliveryPartnerShipmentItem.size;
    this.image = deliveryPartnerShipmentItem.image;
    this.title = deliveryPartnerShipmentItem.title;
    this.deliveryStatus = deliveryPartnerShipmentItem.delivery_status;
  }
}

export default DeliveryParnterShipmentDataModel;
