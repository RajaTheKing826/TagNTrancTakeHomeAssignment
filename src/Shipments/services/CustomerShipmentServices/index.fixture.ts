import React from "react";
import { resolveWithTimeout } from "../../../Common/utils/promiseUtils";
import { getFilteredShipmentsResponse } from "../../utils/requestObjectUtils";
import customerShipmentFixtureResponse from "../../fixtures/customer-shipment-fixtures.json";
import deliveryPartnerShipmentFixturesResponse from "../../fixtures/delivery-partner-shipment-fixtures copy.json";
import {
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
} from "../types";
import { ShipmentService } from ".";

export class ShipmentFixtureService implements ShipmentService {
  getCustomerShipmentDetails = (
    requestObject: GetCustomerShipmentsRequestObject
  ) => {
    const filteredResponse = getFilteredShipmentsResponse(
      requestObject,
      customerShipmentFixtureResponse
    );
    return resolveWithTimeout(filteredResponse);
  };

  getDeliveryPartnerShipmentDetails = (
    requestObject: GetDeliveryPartnerShipmentsRequestObject
  ) => {
    const filteredResponse = getFilteredShipmentsResponse(
      requestObject,
      deliveryPartnerShipmentFixturesResponse
    );
    return resolveWithTimeout(filteredResponse);
  };
}
