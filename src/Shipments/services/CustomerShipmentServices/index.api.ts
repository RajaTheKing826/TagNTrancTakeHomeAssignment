import React from "react";
import Config from "../../../Common/constants/EnvironmentConstants";
import {
  CustomerShipmentAPIRepsonse,
  GetCustomerShipmentsRequestObject,
} from "../types";
import { endpoints } from "../endpoints";

import { CustomerShipmentService } from "./index";

class CustomerShipmentAPIServices implements CustomerShipmentService {
  apiUrl: string;
  constructor() {
    const { getCustomerShipments } = endpoints;
    this.apiUrl = Config.SHIPMENTS_API + getCustomerShipments;
  }
  getItems = (requestObject: GetCustomerShipmentsRequestObject) => {
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
