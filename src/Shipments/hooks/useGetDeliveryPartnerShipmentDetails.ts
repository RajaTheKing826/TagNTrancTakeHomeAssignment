import { UseMutateAsyncFunction, useMutation } from "react-query";
import { GetDeliveryPartnerShipmentsRequestObject } from "../services/types";
import useShipmentService from "./services/useShipmentService";

const useGetDeliveryParnterShipmentDetails = (): {
  getDeliveryPartnerShipmentDetailsApi: UseMutateAsyncFunction<
    any,
    unknown,
    {},
    unknown
  >;
  error: unknown;
  status: string;
} => {
  const { shipmentService } = useShipmentService();

  const getDeliveryPartnerShipmentDetails = (
    params: GetDeliveryPartnerShipmentsRequestObject
  ) => {
    return shipmentService.getDeliveryPartnerShipmentDetails(params);
  };

  const { mutateAsync, error, status } = useMutation(
    getDeliveryPartnerShipmentDetails
  );

  return {
    getDeliveryPartnerShipmentDetailsApi: mutateAsync,
    error,
    status,
  };
};

export default useGetDeliveryParnterShipmentDetails;
