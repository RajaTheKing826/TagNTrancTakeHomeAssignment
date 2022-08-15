import React from "react";
import {
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
  UpdateShipmentDeliveryStatus,
} from "../types";

export interface ShipmentService {
  getCustomerShipmentDetails: (
    requestObject: GetCustomerShipmentsRequestObject
  ) => Promise<any>;

  getDeliveryPartnerShipmentDetails: (
    requestObject: GetDeliveryPartnerShipmentsRequestObject
  ) => Promise<any>;

  updateItemDeliveryPickupStatus: (
    requestObject: UpdateShipmentDeliveryStatus
  ) => Promise<any>;
}
