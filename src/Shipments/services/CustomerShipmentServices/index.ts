import React from "react";
import {
  CustomerShipmentAPIRepsonse,
  GetCustomerShipmentsRequestObject,
} from "../types";

export interface CustomerShipmentService {
  getItems: (
    requestObject: GetCustomerShipmentsRequestObject
  ) => Promise<CustomerShipmentAPIRepsonse>;
}
