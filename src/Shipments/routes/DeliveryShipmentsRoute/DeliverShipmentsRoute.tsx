import React, { useEffect, useState } from "react";
import { useMachine } from "@xstate/react";

import DeliveryPartnerShipmentDetailsPage from "../../components/DeliveryPartnerShipmentDetailsPage";
import useDeliveryPartnerShipmentMachine from "../../hooks/useDeliveryPartnerShipmentsMachine";
import { ON_GET_SHIPMENT_DETAILS_EVENT } from "../../machines/DeliveryPartnerShipmentsMachine/constants";
import { SelectOption } from "../../../Common/components/CommonSelectorComponent/CommonSelectorComponent";

export const DeliveryPartnerShipmentDetailsRoute = () => {
  const [selectedFilter, setSelectedFilter] = useState<any>();
  const [selectedSort, setSelectedSort] = useState<any>();

  const { deliveryPartnerShipmentsMachine } =
    useDeliveryPartnerShipmentMachine();
  const [
    deliveryPartnerShipmentsMachineState,
    deliveryPartnerShipmentsMachineSend,
  ]: any = useMachine(deliveryPartnerShipmentsMachine);

  useEffect(() => {
    deliveryPartnerShipmentsMachineSend({
      type: ON_GET_SHIPMENT_DETAILS_EVENT,
      data: {
        filter: selectedFilter?.value,
        sort: selectedSort?.value,
      },
    });
  }, [selectedFilter, selectedSort]);

  return (
    <DeliveryPartnerShipmentDetailsPage
      deliveryPartnerShipmentsMachineState={
        deliveryPartnerShipmentsMachineState
      }
      deliveryPartnerShipmentsMachineSend={deliveryPartnerShipmentsMachineSend}
      setSelectedFilter={setSelectedFilter}
      setSelectedSort={setSelectedSort}
      defaultFilterValue={selectedFilter}
      defaultSortValue={selectedSort}
    />
  );
};
