import { MutableRefObject, useRef } from "react";

import { CustomerShipmentService } from "../../services/CustomerShipmentServices";
import { CustomerShipmentFixtureService } from "../../services/CustomerShipmentServices/index.fixture";

interface CustomerShipmentServiceType {
  customerShipmentService: CustomerShipmentService;
}

const useCustomerShipmentService = (): CustomerShipmentServiceType => {
  const customerShipmentServiceRef: MutableRefObject<CustomerShipmentService | null> =
    useRef(null);
  if (customerShipmentServiceRef.current === null) {
    customerShipmentServiceRef.current = new CustomerShipmentFixtureService();
  }
  return { customerShipmentService: customerShipmentServiceRef.current };
};

export default useCustomerShipmentService;
