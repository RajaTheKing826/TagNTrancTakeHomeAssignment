import React from "react";
import Config from "../../../Common/constants/EnvironmentConstants";
import {
  CustomerShipmentAPIRepsonse,
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
} from "../types";
import { endpoints } from "../endpoints";

import { ShipmentService } from "./index";

class CustomerShipmentAPIServices implements ShipmentService {
  apiUrl: string;
  constructor() {
    const { getCustomerShipments } = endpoints;
    this.apiUrl = Config.SHIPMENTS_API + getCustomerShipments;
  }
  getCustomerShipmentDetails = (
    requestObject: GetCustomerShipmentsRequestObject
  ) => {
    return fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObject),
    }).then((data) => data);
  };

  getDeliveryPartnerShipmentDetails = (
    requestObject: GetDeliveryPartnerShipmentsRequestObject
  ) => {
    return fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObject),
    }).then((data) => data);
  };
}

export default CustomerShipmentAPIServices;
