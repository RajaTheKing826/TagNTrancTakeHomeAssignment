import React from "react";
import {
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
} from "../types";

export interface ShipmentService {
  getCustomerShipmentDetails: (
    requestObject: GetCustomerShipmentsRequestObject
  ) => Promise<any>;

  getDeliveryPartnerShipmentDetails: (
    requestObject: GetDeliveryPartnerShipmentsRequestObject
  ) => Promise<any>;
}
