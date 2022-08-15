import { UseMutateAsyncFunction, useMutation } from "react-query";
import { GetCustomerShipmentsRequestObject } from "../services/types";
import useCustomerShipmentService from "./services/useCustomerShipmentService";

const useGetCustomerShipmentDetails = (): {
  getCustomerDetailsApi: UseMutateAsyncFunction<any, unknown, {}, unknown>;
  error: unknown;
  status: string;
} => {
  const { customerShipmentService } = useCustomerShipmentService();

  const getCustomerShipmentDetails = (
    params: GetCustomerShipmentsRequestObject
  ) => {
    return customerShipmentService.getItems(params);
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
