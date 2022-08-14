import React from "react";
import { resolveWithTimeout } from "../../../Common/utils/promiseUtils";
import { getFilteredShipmentsResponse } from "../../utils/requestObjectUtils";
import customerShipmentFixtureResponse from "../../fixtures/customer-shipment-fixtures.json";
import { GetCustomerShipmentsRequestObject } from "../types";
import { CustomerShipmentService } from ".";

class CustomerShipmentFixtureService implements CustomerShipmentService {
  getItems = (requestObject: GetCustomerShipmentsRequestObject) => {
    const filteredResponse = getFilteredShipmentsResponse(
      requestObject,
      customerShipmentFixtureResponse
    );
    return resolveWithTimeout(filteredResponse);
  };
}
