import React from "react";

import {
  customerShipmentMachineEvents,
  customerShipmentMachineStates,
  customerShipmentMachineTags,
} from "./constants";

const {
  initialState,
  getDeliverPartnerSuccessState,
  getDeliveryPartnerFailureState,
  getDeliveryPartnersState,
  getShipmentDetailsState,
  getShipmentDetailsFailureState,
  getShipmentDetailsSuccessState,
} = customerShipmentMachineStates;

const { onGetDeliveryPartnerEvent, onGetShipmentDetailsEvent, onRetryEvent } = customerShipmentMachineEvents

const { pageFailureView, pageLoading, buttonLoading } = customerShipmentMachineTags 


