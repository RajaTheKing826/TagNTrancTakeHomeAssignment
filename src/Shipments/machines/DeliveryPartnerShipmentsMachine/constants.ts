export const INITIAL_STATE = "initialState";
export const GET_SHIPMENT_DETAILS_STATE = "getShipmentDetailsState";
export const GET_SHIPMENT_DETAILS_SUCCESS_STATE =
  "getShipmentDetailsSuccessState";
export const GET_SHIPMENT_DETAILS_FAILUE_STATE =
  "getShipmentDetailsFailureState";
export const GET_DELIVERY_PARTNERS_STATE = "getDeliveryPartnersState";
export const GET_DELIVERY_PARTNERS_SUCCESS_STATE =
  "getDeliveryPartnersSuccessState";
export const GET_DELIVERY_PARTNERS_FAILURE_STATE =
  "getDeliveryPartnersFailureState";

export const ON_GET_SHIPMENT_DETAILS_EVENT = "onGetShipmentDetailsEvent";
export const ON_GET_DELIVERY_PARTNERS_EVENT = "onGetDeliveryPartnersEvent";
export const ON_RETRY_EVENT = "onRetryEvent";

export const PAGE_LOADING = "PAGE_LOADING";
export const BUTTON_LOADING = "BUTTON_LOADING";
export const PAGE_FAILURE_VIEW = "PAGE_FAILURE_VIEW";

export const deliveryPartnerShipmentMachineStates = {
  initialState: INITIAL_STATE,
  getShipmentDetailsState: GET_SHIPMENT_DETAILS_STATE,
  getShipmentDetailsSuccessState: GET_SHIPMENT_DETAILS_SUCCESS_STATE,
  getShipmentDetailsFailureState: GET_SHIPMENT_DETAILS_FAILUE_STATE,
  getDeliveryPartnersState: GET_DELIVERY_PARTNERS_STATE,
  getDeliverPartnerSuccessState: GET_DELIVERY_PARTNERS_SUCCESS_STATE,
  getDeliveryPartnerFailureState: GET_DELIVERY_PARTNERS_FAILURE_STATE,
};

export const deliveryPartnerShipmentMachineEvents = {
  onGetShipmentDetailsEvent: ON_GET_SHIPMENT_DETAILS_EVENT,
  onGetDeliveryPartnerEvent: ON_GET_DELIVERY_PARTNERS_EVENT,
  onRetryEvent: ON_RETRY_EVENT,
};

export const deliveryPartnerShipmentMachineTags = {
  pageLoading: PAGE_LOADING,
  buttonLoading: BUTTON_LOADING,
  pageFailureView: PAGE_FAILURE_VIEW,
};
