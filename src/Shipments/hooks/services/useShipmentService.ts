import { MutableRefObject, useRef } from "react";

import { ShipmentService } from "../../services/CustomerShipmentServices";
import { ShipmentFixtureService } from "../../services/CustomerShipmentServices/index.fixture";

interface ShipmentServiceType {
  shipmentService: ShipmentService;
}

const useShipmentService = (): ShipmentServiceType => {
  const shipmentServiceRef: MutableRefObject<ShipmentService | null> =
    useRef(null);
  if (shipmentServiceRef.current === null) {
    shipmentServiceRef.current = new ShipmentFixtureService();
  }
  return { shipmentService: shipmentServiceRef.current };
};

export default useShipmentService;
