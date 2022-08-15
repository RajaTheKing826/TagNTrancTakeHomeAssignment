import { UseMutateAsyncFunction, useMutation } from "react-query";
import { GetCustomerShipmentsRequestObject } from "../services/types";
import useShipmentService from "./services/useShipmentService";

const useGetCustomerShipmentDetails = (): {
  getCustomerDetailsApi: UseMutateAsyncFunction<any, unknown, {}, unknown>;
  error: unknown;
  status: string;
} => {
  const { shipmentService: customerShipmentService } = useShipmentService();

  const getCustomerShipmentDetails = (
    params: GetCustomerShipmentsRequestObject
  ) => {
    return customerShipmentService.getCustomerShipmentDetails(params);
  };

  const { mutateAsync, error, status } = useMutation(
    getCustomerShipmentDetails
  );

  return {
    getCustomerDetailsApi: mutateAsync,
    error,
    status,
  };
};

export default useGetCustomerShipmentDetails;
