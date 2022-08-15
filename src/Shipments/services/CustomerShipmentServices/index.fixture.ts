import React from "react";
import { resolveWithTimeout } from "../../../Common/utils/promiseUtils";
import {
  getCustomerFilteredShipmentsResponse,
  getFilteredAndSortedDeliveryPartnerShipments,
} from "../../utils/requestObjectUtils";
import customerShipmentFixtureResponse from "../../fixtures/customer-shipment-fixtures.json";
import deliveryPartnerShipmentFixturesResponse from "../../fixtures/delivery-partner-shipment-fixtures.json";
import {
  GetCustomerShipmentsRequestObject,
  GetDeliveryPartnerShipmentsRequestObject,
} from "../types";
import { ShipmentService } from ".";

export class ShipmentFixtureService implements ShipmentService {
  getCustomerShipmentDetails = (
    requestObject: GetCustomerShipmentsRequestObject
  ) => {
    const filteredResponse = getCustomerFilteredShipmentsResponse(
      requestObject,
      customerShipmentFixtureResponse
    );
    return resolveWithTimeout(filteredResponse);
  };

  getDeliveryPartnerShipmentDetails = (
    requestObject: GetDeliveryPartnerShipmentsRequestObject
  ) => {
    const filteredResponse = getFilteredAndSortedDeliveryPartnerShipments(
      requestObject,
      deliveryPartnerShipmentFixturesResponse
    );
    return resolveWithTimeout(filteredResponse);
  };
}
